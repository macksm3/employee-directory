import axios from "axios";

// adjust number of names on the list below
export default {
  getEmployeeList: function () {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  }
};
