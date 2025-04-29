"use client";
import { fetchContactPageData } from "@/lib/api";
import WebLayout from "@/web-components/layout/Layout";
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Iletisim() {

  //const [phones, setPhones] = useState<string[]>([""]); // Dizi olarak telefon numaraları
  //const [faxs, setFaxs] = useState<string[]>([""]); // Dizi olarak telefon numaraları
  //const [emails, setEmails] = useState<string[]>([""]); // Dizi olarak e-posta adresleri
  const [address, setAddress] = useState<string>("");
  const [googleMapsLink, setGoogleMapsLink] = useState<string | null>(null);
  
  const [facebook, setFacebook] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await fetchContactPageData();
        const contact = datas.contact || {};
        const socialmedia = datas.socialmedia || {};
        
        // Ensure array values
        //setPhones(contact?.phone ? [contact.phone] : []);
        //setFaxs(contact?.faxs ? [contact.faxs] : []);
        //setEmails(contact?.email ? [contact.email] : []);
        
        setAddress(contact?.address || "");
        setGoogleMapsLink(contact?.maps || null);
        
        setFacebook(socialmedia?.facebook || "");
        setTwitter(socialmedia?.twitter || "");
        setYoutube(socialmedia?.youtube || "");
        setInstagram(socialmedia?.instagram || "");
        setLinkedin(socialmedia?.linkedin || "");
      }
      catch (error) {
        console.error("Veri çekilirken hata oluştu:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <WebLayout>
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center mb-10">İletişim Bilgileri</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="bg-gray-100 p-4 rounded-md mb-6">
                {/*<img
                  src="/placeholder.svg"
                  alt="Kon TV Location"
                  className="w-full h-64 object-cover"
                />*/}
                {googleMapsLink && (
                  <iframe
                    src={googleMapsLink}
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                {/*}
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-blue-400 text-white p-2 rounded-full">
                  <Twitter size={24} />
                </a>
                <a href="#" className="bg-red-600 text-white p-2 rounded-full">
                  <Youtube size={24} />
                </a>
                <a href="#" className="bg-pink-600 text-white p-2 rounded-full">
                  <Instagram size={24} />
                </a>*/}
                {facebook && (
                  <a href={facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full">
                    <Facebook size={24} />
                  </a>
                )}
                {twitter && (
                  <a href={twitter} target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white p-2 rounded-full">
                    <Twitter size={24} />
                  </a>
                )}
                {youtube && (
                  <a href={youtube} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white p-2 rounded-full">
                    <Youtube size={24} />
                  </a>
                )}
                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white p-2 rounded-full">
                    <Instagram size={24} />
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-2 rounded-full">
                    <Linkedin size={24} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Adres</h2>
                <p>{/*Emirgazi Mh. Görsel Sk. No:1 Anmeg Plaza Karatay/KONYA*/} {address}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Telefon</h2>
                <p>444 0 155</p>
                {/*
                {(Array.isArray(phones) ? phones : []).map((phone, index) => (
                  <span key={index}>{phone}{index < phones.length - 1 ? <br /> : ""}</span>
                ))}*/}
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Fax</h2>
                <p>0(332) 350 43 04</p>
                {/*
                {(Array.isArray(faxs) ? faxs : []).map((fax, index) => (
                  <span key={index}>{fax}{index < faxs.length - 1? <br /> : ""}</span>
                ))}*/}
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">E-Posta</h2>
                <p>bilgi@kontv.com.tr</p>
                {/*
                {(Array.isArray(emails) ? emails : []).map((email, index) => (
                  <span key={index}>{email}{index < emails.length - 1? <br /> : ""}</span>
                ))}*/}
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Kep Adresi</h2>
                <p>kontv@hs03.kep.tr</p>
                {/*{Array.isArray(emails) && emails[1]}*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
}
