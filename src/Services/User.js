import Axios from "axios";
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Không được rỗng"),
  matKhau: yup
    .string()
    .required("*Không được rỗng")
    .min(6, "*Mật khẩu phải từ 6 ký tự"),
  hoTen: yup.string().required("*Không được rỗng"),
  email: yup
    .string()
    .required("*Không được rỗng")
    .email("*Email không đúng định dạng"),
  soDt: yup
    .string()
    .required("*Không được rỗng")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "Số điện thoại phải là số"
    ),
});

class UserService {

    loginUser = user => {
        return Axios({
            method="POST",
            url="http://localhost:8081/login",
            data: user
        })
    }

    signupUser = user => {
    return Axios({
      method: "POST",
      url: "http://localhost:8081/adduser",
      data: user
    });
  };
}