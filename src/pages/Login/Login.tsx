import { useForm, FieldErrors } from "react-hook-form";
import { TextInput, Button, Space } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppDispatch, RootState } from "store";
import { login } from "slices/auth";

interface LoginValues {
  taiKhoan: string;
  matKhau: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: { taiKhoan: "", matKhau: "" },
    // mode: cách để trigger validation, mặc định là onSubmit
    mode: "onTouched",
  });

  const dispatch = useDispatch<AppDispatch>();
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const onSubmit = (values: LoginValues) => {
    dispatch(login(values));
  };

  const onError = (errors: FieldErrors<LoginValues>) => {
    console.log(errors);
  };

  // Kiểm tra currentUser có phải là object rỗng hay không, nếu không phải => user đã đăng nhập
  if (Object.keys(currentUser).length) {
    // Redirect user về trang Home
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <TextInput
          type="text"
          label="Tài Khoản"
          placeholder="Tài Khoản"
          error={errors.taiKhoan?.message}
          {...register("taiKhoan", {
            required: {
              value: true,
              message: "Tài khoản không được để trống",
            },
          })}
        />
        <TextInput
          type="password"
          label="Mật Khẩu"
          placeholder="Mật Khẩu"
          error={errors.matKhau?.message}
          {...register("matKhau", {
            required: {
              value: true,
              message: "Mật khẩu không được để trống",
            },
            // pattern: {
            //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            //   message:
            //     "Mật khẩu ít nhất 8 kí tự, có ít nhất một chữ cái và một số",
            // },
          })}
        />
        <Space h="md" />
        {/* Error từ API trả ra */}
        {error && <span>{error}</span>}
        <Space h="md" />

        <Button type="submit" disabled={isLoading}>
          Đăng Nhập
        </Button>
      </form>
    </div>
  );
};

export default Login;

// redux-form/formik/react-final-form/react-hook-form
