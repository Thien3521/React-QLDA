import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiInstance from "../../utils/api";
import TopImage from "../../assets/images/top.png"
import BottomImage from "../../assets/images/bottom.png"
const Login = () => {
    const navigate = useNavigate()
    const params = useLocation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log({ username, password });
        apiInstance({
            url: "/api/auth/login",
            method: "POST",
            params: {
                username: username,
                password: password
            }
        }).then(response => {
            const responseData = response.data;
            const { token, userId } = responseData;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            navigate("/")
        })
    }
    return (
        <div className={"w-full flex relative h-screen"}>
            <div className='w-8/12 border'>
                <div className='w-full flex justify-between flex-col'>
                            <div className='px-[40px] text-[20px] py-[24px] mb-[93px]'>Quản lý đồ án</div>
                    
                    <div className='w-5/12 mx-auto'>
                        <div className='text-center mb-[51px] text-[32px] font-bold text-[#1890FF]'>Đăng nhập</div>
                        <div>
                        <label class="block text-gray-800 text-sm font-semibold mb-2" for="username">
                            Tài khoản
                        </label>
                            <input className='shadow appearance-none border rounded w-[361px] h-[40px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={username} onChange={(event) => {
                                const value = event.target.value;
                                setUsername(value)
                            }} placeholder='Tài khoản' />
                        </div>
                        <div>
                        <label class="block text-gray-800 text-sm font-semibold mb-2" for="username">
                            Mật khẩu
                        </label>
                            <input onChange={(event) => {
                                const value = event.target.value;
                                setPassword(value)
                            }} className='shadow appearance-none border rounded w-[361px] h-[40px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={password} type="password" placeholder='Mật khẩu' />
                        </div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-[361px] h-[40px] mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => handleLogin()}>Đăng nhập</button>
                    </div>
                </div>

            </div>
            <img className='absolute top-0 right-0' src={TopImage} alt='' />
            <img className='absolute bottom-0 right-[30px]' src={BottomImage} alt='' />
        </div>

    )
}

export default Login