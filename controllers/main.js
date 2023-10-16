const URL_LIST = "https://652d3544f9afa8ef4b26ff6f.mockapi.io/accessoriesList";
const URL_GROUP =
  "https://652d3544f9afa8ef4b26ff6f.mockapi.io/accessoriesGroup";

const getElements = (selector) => {
  return document.querySelector(selector);
};

const renderAccessory = (listAccessories, tabID) => {
  let htmlContent = "";
  listAccessories.forEach((value, index) => {
    htmlContent += `
            <div class="my-4 col-12 col-lg-4 col-sm-6">
                <div>
                    <img src="${value.imgSrc_jpg}" class="card-img-top" alt=""width="200" >
                    <div class=" text-center">
                        <h5>${value.name}</h5>
                    </div>
                    <button id="btn-${value.id}" onclick="tryOn('${value.id}')" class="btn btn-info">Thử đồ</button>
                </div>
            </div>
        `;
  });
  getElements(`#${tabID}`).innerHTML = htmlContent;
};

const styleTopClothes = "topclothes";
const styleBotClothes = "botclothes";
const styleShoes = "shoes";
const styleHandbags = "handbags";
const styleNecklaces = "necklaces";
const styleHairStyle = "hairstyle";
const styleBackGround = "background";

const getAccessory = () => {
  const topClothes = [];
  const botClothes = [];
  const shoes = [];
  const handbags = [];
  const necklaces = [];
  const hairStyle = [];
  const backGround = [];

  getAccessoryList()
    .then((result) => {
      let accessory = result.data;
      for (var i = 0; i < accessory.length; i++) {
        if (accessory[i].type === styleTopClothes) {
          topClothes.push(accessory[i]);
        } else if (accessory[i].type === styleBotClothes) {
          botClothes.push(accessory[i]);
        } else if (accessory[i].type === styleShoes) {
          shoes.push(accessory[i]);
        } else if (accessory[i].type === styleHandbags) {
          handbags.push(accessory[i]);
        } else if (accessory[i].type === styleNecklaces) {
          necklaces.push(accessory[i]);
        } else if (accessory[i].type === styleHairStyle) {
          hairStyle.push(accessory[i]);
        } else if (accessory[i].type === styleBackGround) {
          backGround.push(accessory[i]);
        } else {
          //   alert("Error!");
        }
      }
      renderAccessory(topClothes, "tabTopClothes-row");
      renderAccessory(botClothes, "tabBotClothes-row");
      renderAccessory(shoes, "tabShoes-row");
      renderAccessory(handbags, "tabHandBags-row");
      renderAccessory(necklaces, "tabNecklaces-row");
      renderAccessory(hairStyle, "tabHairStyle-row");
      renderAccessory(backGround, "tabBackground-row");
    })

    .catch((err) => {})
    // Luôn luôn chạy dù thành công, thất bại
    .finally(() => {});
};
getAccessory();

const renderAccessoryGroup = (list) => {
  let htmlContent = "";

  list.forEach((value, index) => {
    htmlContent += `
          <li class="nav-item" role="presentation">
              <button
                class="nav-link text-justify btn-info"
                id="pills-${value.tabName}-tab"
                data-toggle="pill"
                data-target="#${value.tabName}"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true")>
              ${value.showName}
              </button>
          </li>
          `;
  });

  getElements("#accessoryGroup").innerHTML = htmlContent;
};

getAccessoryGroup()
  .then((res) => {
    renderAccessoryGroup(res.data);
  })
  .catch(() => {})
  .finally(() => {});
getAccessoryGroup();

window.tryOn = (accessoryId) => {
  const bikinitop = getElements("#bikinitop");
  const bikinibottom = getElements("#bikinibottom");
  const hairstyle = getElements("#hairstyle");
  const necklace = getElements("#necklace");
  const handbag = getElements("#handbag");
  const feet = getElements("#feet");
  const background = getElements("#background");

  let printBikiniTop = "";
  let printBikiniBottom = "";
  let printHairStyle = "";
  let printNecklace = "";
  let printHandbag = "";
  let printFeet = "";
  let printBackGround = "";

  editAccessoryListByID(accessoryId)
    .then(function (res) {
      let accessory = res.data;

      if (accessory.type === styleTopClothes) {
        printBikiniTop += `
                  <img src="${accessory.imgSrc_png}" class="card-img-top" alt="">
              `;
        bikinitop.innerHTML = printBikiniTop;
      } else if (accessory.type === styleBotClothes) {
        printBikiniBottom += `
                  <img src="${accessory.imgSrc_png}" class="card-img-top" alt="">
              `;
        bikinibottom.innerHTML = printBikiniBottom;
      } else if (accessory.type === styleHairStyle) {
        printHairStyle += `
                  <img src="${accessory.imgSrc_png}" class="card-img-top" alt="">
              `;
        hairstyle.innerHTML = printHairStyle;
      } else if (accessory.type === styleNecklaces) {
        printNecklace += `
                  <img src="${accessory.imgSrc_png}" class="card-img-top" alt="">
              `;
        necklace.innerHTML = printNecklace;
      } else if (accessory.type === styleHandbags) {
        printHandbag += `
                  <img src="${accessory.imgSrc_png}" class="card-img-top" alt="">
              `;
        handbag.innerHTML = printHandbag;
      } else if (accessory.type === styleShoes) {
        printFeet += `
                  <img src="${accessory.imgSrc_png}" class="card-img-top" alt="">
              `;
        feet.innerHTML = printFeet;
      } else if (accessory.type === styleBackGround) {
        printBackGround += `
                  <img src="${accessory.imgSrc_png}" class="card-img-top" alt="">
              `;
        background.innerHTML = printBackGround;
      } else {
      }
    })
    .catch(function (err) {});
};
