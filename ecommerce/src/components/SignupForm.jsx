import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api/axiosInstance";
import Header from "../layout/Header";

export default function SignupForm() {
  const [roles, setRoles] = useState([]); 
  const [selectedRole, setSelectedRole] = useState("2"); 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    async function fetchRoles() {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Roller yüklenirken hata oluştu:", error);
      }
    }
    fetchRoles();
  }, []);

  const password = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const payload =
        selectedRole === "3"
          ? {
              ...data,
              store: {
                name: data.store_name,
                phone: data.store_phone,
                tax_no: data.store_tax_no,
                bank_account: data.store_bank_account,
              },
            }
          : data;

      const response = await api.post("/signup", payload);
      alert("Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!");
      console.log(response.data);
    } catch (error) {
      alert("Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.");
      console.error(error);
    }
  };

  return (
    <div>
        <Header/>
    

    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-extrabold text-center text-gray-700 mb-6">Kayıt Ol</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Ad */}
        <div>
          <label className="block font-medium text-gray-600">Ad</label>
          <input
            type="text"
            {...register("name", { required: "Bu alan zorunludur", minLength: 3 })}
            className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* E-posta */}
        <div>
          <label className="block font-medium text-gray-600">E-posta</label>
          <input
            type="email"
            {...register("email", { required: "Bu alan zorunludur", pattern: /^[^@]+@[^@]+\.[^@]+$/ })}
            className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Şifre */}
        <div>
          <label className="block font-medium text-gray-600">Şifre</label>
          <input
            type="password"
            {...register("password", {
              required: "Bu alan zorunludur",
              minLength: { value: 8, message: "En az 8 karakter olmalı" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message: "Şifre büyük harf, küçük harf, rakam ve özel karakter içermelidir",
              },
            })}
            className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Şifre Doğrulama */}
        <div>
          <label className="block font-medium text-gray-600">Şifre Doğrula</label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (value) => value === password || "Şifreler eşleşmiyor",
            })}
            className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        {/* Rol Seçimi */}
        <div>
          <label className="block font-medium text-gray-600">Rol</label>
          <select
            {...register("role_id")}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="border rounded-lg w-full p-3 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Mağaza Bilgileri (Sadece Store için) */}
        {selectedRole === "3" && (
          <>
            <div>
              <label className="block font-medium text-gray-600">Mağaza Adı</label>
              <input type="text" {...register("store_name", { required: "Bu alan zorunludur", minLength: 3 })} className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
            <div>
              <label className="block font-medium text-gray-600">Telefon</label>
              <input type="tel" {...register("store_phone", { required: "Bu alan zorunludur", pattern: /^[0-9]{10}$/ })} className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
            <div>
              <label className="block font-medium text-gray-600">Vergi Kimlik No</label>
              <input type="text" {...register("store_tax_no", { required: "Bu alan zorunludur", pattern: /^T[0-9]{4}V[0-9]{6}$/ })} className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
            <div>
              <label className="block font-medium text-gray-600">Banka Hesabı (IBAN)</label>
              <input type="text" {...register("store_bank_account", { required: "Bu alan zorunludur", pattern: /^[A-Z]{2}[0-9]{18}$/ })} className="border rounded-lg w-full p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>
          </>
        )}

        {/* Gönder Butonu */}
        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition flex justify-center items-center">
          {isSubmitting ? <span className="loader"></span> : "Kayıt Ol"}
        </button>
      </form>
    </div>
    </div>
  );
}
