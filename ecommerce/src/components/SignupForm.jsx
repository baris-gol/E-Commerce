import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api/axiosInstance";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("2"); // Varsayılan müşteri rolü

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
      const { confirmPassword, ...payload } = data;

      if (!payload.role_id) {
        alert("Lütfen bir rol seçiniz.");
        return;
      }

      if (payload.role_id === "3") {
        payload.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }

      console.log("Gönderilen veri:", payload);

      await api.post("/signup", payload);

      alert("Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!");
      navigate(-1);
    } catch (error) {
      console.error("Sunucu Hata Yanıtı:", error.response?.data);
      alert(`Hata: ${error.response?.data?.message || "Bilinmeyen hata oluştu"}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="mt-16 max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Kayıt Ol</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Ad */}
          <div>
            <label className="block text-lg font-semibold mb-2">Ad</label>
            <input
              type="text"
              {...register("name", { required: "Bu alan zorunludur", minLength: 3 })}
              className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* E-posta */}
          <div>
            <label className="block text-lg font-semibold mb-2">E-posta</label>
            <input
              type="email"
              {...register("email", {
                required: "Bu alan zorunludur",
                pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Geçerli bir e-posta giriniz" },
              })}
              className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Şifre */}
          <div>
            <label className="block text-lg font-semibold mb-2">Şifre</label>
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
              className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Şifre Doğrulama */}
          <div>
            <label className="block text-lg font-semibold mb-2">Şifre Doğrula</label>
            <input
              type="password"
              {...register("confirmPassword", {
                validate: (value) => value === password || "Şifreler eşleşmiyor",
              })}
              className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Rol Seçimi */}
          <div>
            <label className="block text-lg font-semibold mb-2">Rol</label>
            <select
              {...register("role_id")}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              defaultValue="2"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mağaza Bilgileri */}
          {selectedRole === "3" && (
            <>
              <div>
                <label className="block text-lg font-semibold mb-2">Mağaza Adı</label>
                <input type="text" {...register("store_name", { required: "Bu alan zorunludur", minLength: 3 })} className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none" />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Telefon</label>
                <input type="tel" {...register("store_phone", { required: "Bu alan zorunludur", pattern: /^[0-9]{10}$/ })} className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none" />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Vergi Kimlik No</label>
                <input type="text" {...register("store_tax_no", { required: "Bu alan zorunludur", pattern: /^T[0-9]{4}V[0-9]{6}$/ })} className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none" />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Banka Hesabı (IBAN)</label>
                <input type="text" {...register("store_bank_account", { required: "Bu alan zorunludur", pattern: /^[A-Z]{2}[0-9]{18}$/ })} className="border border-gray-300 rounded-xl w-full p-3 focus:ring-2 focus:ring-blue-400 outline-none" />
              </div>
            </>
          )}

          {/* Gönder Butonu */}
          <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-200">
            {isSubmitting ? "Gönderiliyor..." : "Kayıt Ol"}
          </button>
        </form>
      </div>
    </div>
  );
}
