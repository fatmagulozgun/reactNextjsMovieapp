"use client" //useStatae ve useEffect olduğudan
import React, { useEffect, useState } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'
import { useTheme } from 'next-themes' //temayı kontrol etmeyi sağlar.

const TemaDegisim = () => {
  const [hazir, setHazir] = useState(false) // component yüklendi mi?
  const { systemTheme, theme, setTheme } = useTheme() //Temayı yönetir (light, dark, system)


  useEffect(() => {
    setHazir(true)  // İlk yüklemede "true" yapılıyor
  }, [])


  //Kullanıcının seçtiği tema, “system” se aktifTema=sistemTemasi
  //değilse yani light veya dark seçmişse aktifTema=tema olur.
  const aktifTema =
    theme === "system" ? systemTheme   // cihazdan al
                      : theme   // kullanıcının seçtiği değeri al


  return (
    <div>
      {
        hazir && (
          aktifTema === "dark"
            ? <CiLight onClick={() => setTheme('light')} size={25} className="cursor-pointer" />
            : <CiDark onClick={() => setTheme('dark')} size={25} className="cursor-pointer" />
        )
      }
    </div>
  )
}

export default TemaDegisim


/*
🎯 Neden hazir kontrolü yapılıyor?
Next.js'de tema bilgisi sadece istemcide bilinir. Eğer sunucuda erişmeye çalışırsan hatalı render olur.
Bu yüzden önce sayfa yüklendikten sonra (hazir olduktan sonra) tema bilgisine erişiyoruz.
Yani tarayıcı yüklendiğinde sistemde temaya bakıyoruz ona göre değiştiriyoruz
*/