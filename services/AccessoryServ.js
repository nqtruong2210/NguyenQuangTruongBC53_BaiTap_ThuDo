//Hàm lấy danh sách phụ kiện
const getAccessoryList = (value) => {
  return axios({
    url: URL_LIST,
    method: "GET",
    params: {
      name: value || undefined,
    },
  });
};

//Hàm xoá
const deleteAccessoryList = (id) => {
  return axios({
    url: `${URL_LIST}/${id}`,
    method: "DELETE",
  });
};

//Hàm thêm
const addAccessoryList = (accessories) => {
  return axios({
    url: URL_LIST,
    method: "POST",
    data: accessories,
  });
};

//Hàm chỉnh sửa
const editAccessoryListByID = (id) => {
  return axios({
    url: `${URL_LIST}/${id}`,
    method: "GET",
  });
};

//Hàm cập nhật
const updateAccessoryListByID = (id, accessories) => {
  return axios({
    url: `${URL_LIST}/${id}`,
    method: "PUT",
    data: accessories,
  });
};

//Hàm lấy danh sách nhóm phụ kiện
const getAccessoryGroup = () => {
  return axios({
    url: URL_GROUP,
    method: "GET",
  });
};
