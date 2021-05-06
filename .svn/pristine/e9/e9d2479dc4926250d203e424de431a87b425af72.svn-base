using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Presentacion.DLL
{
    public class Utilitario
    {
        private const string key = "ABCDEFG54669525PQRSTUVWXYZabcdef852846opqrstuvwxyz";
        /// ESTE METODO SIRVE PARA ENCRIPTAR DE MANERA MASIVA
        /// TE DEVUELVE EN EL ORDEN QUE ESTAS INGRESANDO LOS PARAMETROS
        public static List<string> EncriptaMasivo(params string[] parameters)
        {
            List<string> encriptado = new List<string>();
            foreach (var item in parameters)
            {
                encriptado.Add(EncryptKey(item));
            }

            return encriptado;
        }
        /// ESTE METODO SIRVE PARA DESENCIPTAR DE MANERA MASIVA
        /// TE DEVUELVE EN EL ORDEN QUE ESTAS INGRESANDO LOS PARAMETROS
        public static List<string> DesencriptaMasivo(params string[] parameters)
        {
            List<string> encriptado = new List<string>();
            foreach (var item in parameters)
            {
                encriptado.Add(DecryptKey(item));
            }

            return encriptado;
        }
        public static string EncryptKey(string cadena)
        {
            if (cadena.Trim().Length != 0)
            {
                byte[] keyArray;
                var Arreglo_a_Cifrar = UTF8Encoding.UTF8.GetBytes(cadena.Trim());

                var hashmd5 = new MD5CryptoServiceProvider();

                keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(key));
                hashmd5.Clear();
                var tdes = new TripleDESCryptoServiceProvider
                {
                    Key = keyArray,
                    Mode = CipherMode.ECB,
                    Padding = PaddingMode.PKCS7
                };
                var cTransform = tdes.CreateEncryptor();
                var ArrayResultado = cTransform.TransformFinalBlock(Arreglo_a_Cifrar, 0, Arreglo_a_Cifrar.Length);
                tdes.Clear();
                return Convert.ToBase64String(ArrayResultado, 0, ArrayResultado.Length);
            }
            else
            {
                return cadena;
            }
        }

        public static string DecryptKey(string cadena)
        {
            if (cadena.Trim().Length != 0)
            {
                byte[] keyArray;
                var Array_a_Descifrar = Convert.FromBase64String(cadena.Trim());
                var hashmd5 = new MD5CryptoServiceProvider();
                keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(key));
                hashmd5.Clear();
                var tdes = new TripleDESCryptoServiceProvider
                {
                    Key = keyArray,
                    Mode = CipherMode.ECB,
                    Padding = PaddingMode.PKCS7
                };
                var cTransform = tdes.CreateDecryptor();
                var resultArray = cTransform.TransformFinalBlock(Array_a_Descifrar, 0, Array_a_Descifrar.Length);
                return UTF8Encoding.UTF8.GetString(resultArray);
            }
            else
            {
                return cadena;
            }
        }
    }
}
