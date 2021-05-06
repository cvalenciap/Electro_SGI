using System;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema
{
    public class PermisosSistemaModel
    {
        public class Modulo
        {
            public int CodigoModulo { get; set; }

            private string _Nombre;

            public string Nombre
            {
                get { return _Nombre.Split('_').Length > 1 ? _Nombre.Split('_')[1] : _Nombre; }
                set { _Nombre = value; }
            }

            public string RutaImagen { get; set; }

            public string ControladorModulo { get; set; }

            public string MetodoModulo { get; set; }

            public string Glyphicon { get; set; }

            private int _Orden;

            public int Orden
            {
                get { return _Nombre.Split('_').Length > 1 ? Convert.ToInt32(_Nombre.Split('_')[0]) : 0; }
                set { _Orden = value; }
            }
        }

        public class Opciones
        {
            public int CodigoModulo { get; set; }

            public int OpcionPadre { get; set; }

            public int CodigoOpcion { get; set; }

            private string _Nombre;

            public string Nombre
            {
                get { return _Nombre.Split('_').Length > 1 ? _Nombre.Split('_')[1] : _Nombre; }
                set { _Nombre = value; }
            }

            public string Controlador { get; set; }

            public string Metodo { get; set; }

            public string Area { get; set; }

            public string Glyphicon { get; set; }

            private int _Orden;

            public int Orden
            {
                get { return _Nombre.Split('_').Length > 1 ? Convert.ToInt32(_Nombre.Split('_')[0]) : 0; }
                set { Orden = value; }
            }
        }

        public class PermisoControlador
        {
            public string Controlador { get; set; }

            public int CodigoAccion { get; set; }
        }
    }
}
