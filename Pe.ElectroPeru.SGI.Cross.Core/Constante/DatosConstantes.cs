using System.Collections.Generic;
using System.Configuration;
using System.Web.Mvc;
using System.Linq;
using System;

namespace Pe.ElectroPeru.SGI.Transversal.Core.Constante
{
    /// <summary>
    /// Clase de datos constantes de la Base datos
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 20150424 <br />
    /// Modificación:            <br />
    /// </remarks> 
    public class DatosConstantes
    {        
            /// <summary>
            /// Valores de Tipos de Acción de Botones
            /// </summary>
            public sealed class TablaAccionBoton
        {
            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string Agregar = "412001";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string Editar = "412002";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string Eliminar = "412003";
        }

        /// <summary>
        /// Valores de Tipos de Opción de Menú
        /// </summary>
        public sealed class TablaTipoOpcionMenu
        {
            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string Menu = "410001";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string SubMenu = "410002";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string OpcionMenu = "410003";
        }

        /// <summary>
        /// Valores del nivel de barrera de Investigacion
        /// </summary>
        public sealed class NivelBarreraInvestigacion
        {
            /// <summary>
            /// codigo nivel de Informacion Barrera
            /// </summary>
            public static readonly string CodigoNivelBarrera = "1";
            /// <summary>
            /// codigo nivel de Informacion Fallos
            /// </summary>
            public static readonly string CodigoNivelFallos = "2";
        }

        /// <summary>
        /// Valores de Tipo de Registros
        /// </summary>
        public sealed class TablaTipoRegistro
        {
            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string Auditoria = "001";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string Capacitaciones = "002";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string CharlaInicioGuardia = "003";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string ComiteSubComite = "004";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string CompromisoSsoma = "005";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string DocumentoRequeridoEquipo = "006";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string EvaluacionCumplimientoLegal = "007";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string HigieneOcupacional = "008";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string Incidente = "009";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string Inspecciones = "010";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string Iperc = "011";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string ObjetivoMetaSsoma = "012";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string ObservacionPlamneadaTarea = "013";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string PlanMejora = "014";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string ReporteRiesgo = "015";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string Reuniones = "016";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string Simulacros = "017";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string VisitaGerencial = "018";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string ComiteDireccionSig = "019";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string ComiteDireccionRiesgoAuditoria = "020";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string ComiteEtica = "021";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public const string ComiteRiesgoAuditoria = "022";

            /// <summary>
            /// codigo de investigacion 
            /// proviene de anuncio
            /// </summary>
            public const string Investigacion = "009"; /*SE VERIFICA QUE EN LA TABLA SEG.INTEGRADOR_TIPO_REGISTRO
                                                        * LOS QUE TIENE ESTE TIPO SON INVESTIGACIONES, YA QUE EL RECORD
                                                        * NO PASA POR EL INTEGRADOR Y POR ELLO NO FIGURA EN LA TABLA MENCIONADA
                                                       */
        }

        /// <summary>
        /// Valores de Nivel de Acceso
        /// </summary>
        public sealed class TablaNivelAcceso
        {
            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string ControlTotal = "411001";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string Escritura = "411002";

            /// <summary>
            /// codigo de elemento de maestro tabla
            /// </summary>
            public static readonly string Lectura = "411003";
        }

        /// <summary>
        /// Valores Iniciales
        /// </summary>
        public static class ValoresIniciales
        {
            /// <summary>
            /// Codigo Value de Guid Por Defecto
            /// </summary>
            public static readonly string Value = "00000000-0000-0000-0000-000000000000";
            /// <summary>
            /// Codigo de Ninguno
            /// </summary>
            public static readonly string Ninguno = "99999999-9999-9999-9999-999999999999";
            /// <summary>
            /// Valor Seleccione para usar en Listas del Combobox
            /// </summary>
            public static readonly string TextSeleccione = "SELECCIONE";
            /// <summary>
            /// Valor Textos Otros
            /// </summary>
            public static readonly string TextOtros = "OTROS";
            /// <summary>
            ///Valor Todos para usar en Listas del Combobox
            /// </summary>
            public static readonly string TextTodos = "(TODOS)";
            /// <summary>
            /// Fecha Mínimo de cadena por Defecto
            /// </summary>
            public static readonly string FechaMinimaCadena = "1900-01-01";
            /// <summary>
            /// Valor que indica Todos
            /// </summary>
            public static readonly int Todos = 2;
            /// <summary>
            /// Valor que Obtiene la Fecha Minima de la cadena
            /// </summary>
            public static readonly DateTime FechaMinima = Convert.ToDateTime(FechaMinimaCadena);
        }

        /// <summary>
        /// Constantes de Informe Final de Indicente
        /// </summary>
        public sealed class InformeFinalIncidente
        {
            public static List<SelectListItem> ListaInformeFinalIncidente = new List<SelectListItem>()
            {
                new SelectListItem() { Text = "SÍ", Value = "SI"},
                new SelectListItem() { Text = "NO", Value = "NO"},
            };

            public static List<SelectListItem> ListaInformeFinalIncidenteIngles = new List<SelectListItem>()
            {
                new SelectListItem() { Text = "YES", Value = "SI"},
                new SelectListItem() { Text = "NO", Value = "NO"},
            };
        }

        /// <summary>
        /// Constantes de Tipo de Unidad Organizativa
        /// </summary>
        public sealed class TipoUnidadOrganizativa
        {
            /// <summary>
            /// Tipo de Unidad Organizativa
            /// </summary>
            public static string UnidadOrganizativa = "UNIDAD_ORGANIZATIVA";

            /// <summary>
            /// Tipo de Unidad Organizativa Sistema
            /// </summary>
            public static string UnidadOrgSistema = "UNIDAD_ORG_SISTEMA";
        }

        /// <summary>
        /// Constantes de Tipo de Unidad Organizativa
        /// </summary>
        public sealed class AccionSistema
        {
            /// <summary>
            /// Tipo de Unidad Organizativa
            /// </summary>
            public static string Nuevo = "N";

            /// <summary>
            /// Tipo de Unidad Organizativa Sistema
            /// </summary>
            public static string Editar = "E";
        }


        /// <summary>
        /// Constantes de Estado de Renovación
        /// </summary>
        public sealed class EstadoRenovacion
        {
            /// <summary>
            /// 
            /// </summary>
            public static string Pendiente = "P";
            /// <summary>
            /// 
            /// </summary>
            public static string Edicion = "D";
            /// <summary>
            /// 
            /// </summary>
            public static string EnProceso = "E";
            /// <summary>
            /// 
            /// </summary>
            public static string Aprobado = "A";
            /// <summary>
            /// 
            /// </summary>
            public static string Rechazado = "R";
            /// <summary>
            /// 
            /// </summary>
            public static string Observado = "O";
            /// <summary>
            /// 
            /// </summary>
            public static string Finalizado = "F";
        }

        public sealed class EstadoRenovacionDescripcion
        {
            public static readonly Dictionary<string, string> ListaValores = new Dictionary<string, string>() { 
            { EstadoRenovacion.Pendiente, "Pendiente" },
            { EstadoRenovacion.Edicion, "Edicion" },
            { EstadoRenovacion.EnProceso, "En Proceso" },
            { EstadoRenovacion.Aprobado, "Aprobado" }, 
            { EstadoRenovacion.Observado, "Observado" }, 
            { EstadoRenovacion.Rechazado, "Rechazado" }, 
            { EstadoRenovacion.Finalizado, "Finalizado" } };
        }
        public sealed class EstadoContrato
        {
            /// <summary>
            /// Estado Vigente
            /// </summary>
            public static string Vigente = "V";

            /// <summary>
            /// Estado Terminado
            /// </summary>
            public static string Historico = "H";
        }
        public sealed class EstadoContratoDescripcion
        {

            public static readonly Dictionary<string, string> ListaValores = new Dictionary<string, string>() { 
            { EstadoContrato.Vigente, "Vigente" },
            { EstadoContrato.Historico, "Historico" } };
        }
        /// <summary>
        /// Constantes de Estado de Registro
        /// </summary>
        public sealed class EstadoRegistro
        {
            /// <summary>
            /// Estado de Registro
            /// </summary>
            public static readonly string Activo = "1";

            /// <summary>
            /// Estado Inactivo
            /// </summary>
            public static readonly string Inactivo = "0";
        }

        /// <summary>
        /// Referencia: Modulo Capacitación
        /// Constantes de Estado del Colaborador para Asignación
        /// </summary>
        public sealed class EstadoColaboradorAsignacion
        {
            /// <summary>
            /// Estado Activo del Colaborador
            /// </summary>
            public static readonly string Activo = "ACT";

            /// <summary>
            /// Estado Inactivo del Colaborador
            /// </summary>
            public static readonly string Inactivo = "INA";
        }

        /// <summary>
        /// Referencia: Modulo Asignación
        /// Constantes de Condición del Colaborador para Asignación Persona Proyecto
        /// </summary>
        public sealed class CondicionColaboradorAsignacion
        {
            /// <summary>
            /// Estado Pendiente: En Asignación. Cuando se asigna la persona al proyecto.(PRIMERO)
            /// </summary>
            public static readonly string Pendiente = "PEN";

            /// <summary>
            /// Estado Planificado: En Asignación. Cuando se detecta que la persona tiene al menos
            /// un equipo asignado.(SEGUNDO)
            /// </summary>
            public static readonly string Planificado = "PLA";

            /// <summary>
            /// Estado en proceso: En Ejecución. Cuando se detecta que la persona ha recibido horas de capacitación
            /// de al menos un equipo asignado.(TERCERO) 
            /// </summary>
            public static readonly string EnProceso = "EPR";

            /// <summary>
            /// Estado STO (Safe to Operate): En Ejecución. Cuando se detecta que la persona terminó la capacitación
            /// de todos sus equipos asignados.(CUARTO)
            /// </summary>
            public static readonly string STO = "STO";

            /// <summary>
            /// Estado Competente cuando la Ejecución es al 100% y esta aprobado.(QUINTO)
            /// </summary>
            public static readonly string Competente = "COM";
        }


        /// <summary>
        /// Referencia: Modulo Asignación
        /// Constantes de Condición del Equipo para Asignación Persona Equipo
        /// </summary>
        public sealed class CondicionEquipoAsignacion
        {
            /// <summary>
            /// Estado Planificado: En Asignación. Cuando se asigna el equipo a la persona. (PRIMERO) 
            /// </summary>
            public static readonly string Planificado = "PLA";

            /// <summary>
            /// Estado en proceso: En Ejecución. Cuando se registra horas de capacitación al equipo de la persona.(SEGUNDO) 
            /// </summary>
            public static readonly string EnProceso = "EPR";

            /// <summary>
            /// Estado Terminado: En Ejecución. Cuando se finaliza todas las horas de capacitación del equipo de la persona.(TERCERO) 
            /// </summary>
            public static readonly string Terminado = "TER";
        }

        /// <summary>
        /// Referencia: Modulo Asignación
        /// Constantes de Vistas de Cursos
        /// </summary>
        public sealed class VistasAsignacion
        {
            /// <summary>
            /// Vista: Listado de Participantes para cursos 
            /// </summary>
            public static readonly string Cursos = "CURSO";

        }

        /// <summary>
        /// Constantes de Tipo Ocurrencia Acción
        /// </summary>
        public sealed class TipoOcurrenciaAccion
        {
            /// <summary>
            /// Hallazgo
            /// </summary>
            public static readonly string Hallazgo = "TOA01";

        }

        /// <summary>
        /// Constantes de Estado de Vigencia
        /// </summary>
        public sealed class EstadoVigencia
        {
            /// <summary>
            /// Estado Vigente
            /// </summary>
            public static readonly string Vigente = "V";

            /// <summary>
            /// Estado Próximo
            /// </summary>
            public static readonly string Proximo = "P";

            /// <summary>
            /// Estado Histórico
            /// </summary>
            public static readonly string Historico = "H";
        }

        /// <summary>
        /// Constantes Formato
        /// </summary>
        public sealed class Formato
        {
            /// <summary>
            /// Formato de Fecha
            /// </summary>
            public static readonly string FormatoFecha = "dd/MM/yyyy";

            /// <summary>
            /// Formato de Fecha de Selector
            /// </summary>
            public static readonly string FormatoFechaSelector = "dd/mm/yy";

            /// <summary>
            /// Formato de Fecha de Mascara
            /// </summary>
            public static readonly string FormatoFechaMascara = "00/00/0000";

            /// <summary>
            /// Formato de Hora
            /// </summary>
            public static readonly string FormatoHora = "hh:mm tt";

            /// <summary>
            /// Formato de 24 Horas
            /// </summary>
            public static readonly string Formato24Horas = "HH:mm";


            public static readonly string SoloMinutos = "mm";

            /// <summary>
            /// Formato de Número Entero
            /// </summary>
            public static readonly string FormatoNumeroEntero = "#,##0";

            /// <summary>
            /// Formato de Número Decimal
            /// </summary>
            public static readonly string FormatoNumeroDecimal = "#,##0.00";
            /// <summary>
            /// Formato de número de contrato
            /// </summary>
            public static readonly string FormatoNumeroContrato = "{0}.{1}.{2}.{3}.{4}";
            /// <summary>
            /// Formato de número de contrato
            /// </summary>
            public static readonly string SeparadorFormatoNumeroContrato = ".";
            /// <summary>
            /// Separador de Número Decimal
            /// </summary>
            public static readonly string SeparadorNumeroDecimal = ".";
            /// <summary>
            /// Formato de número de adenda
            /// </summary>
            public static readonly string FormatoNumeroAdenda = "{0}-A{1}";
        }

        /// <summary>
        /// Constantes del metodo de obtener proveedor del servicio de oracle
        /// </summary>
        public sealed class OperacionObtenerProveedorServicioOracle
        {
            /// <summary>
            /// Columna Ruc
            /// </summary>
            public const string ColumnaRuc = "RUC";

            /// <summary>
            /// Formato de Fecha de Selector
            /// </summary>
            public const string ColumnaNombre = "NOMBRE";
        }

        /// <summary>
        /// Abreviatura de los modulos de SGATE
        /// </summary>
        public sealed class CodigoModuloSGATE
        {
            /// <summary>
            /// Módulo Record
            /// </summary>
            public const string Record = "REC";
            /// <summary>
            /// Módulo Investigación
            /// </summary>
            public const string Investigacion = "INV";
        }

        /// <summary>
        /// Lista de Tipo de Ingreso de datos Contratista
        /// </summary>
        public sealed class TipoFormaIngresoContratista
        {
            /// <summary>
            /// Por datos promedio
            /// </summary>
            public const string DatosPromedio = "00001";
            /// <summary>
            /// Por datos en detalle
            /// </summary>
            public const string DatosEnDetalle = "00002";
        }


        /// <summary>
        /// Constantes de Niveles
        /// </summary>
        public sealed class Nivel
        {
            /// <summary>
            /// Nivel de Empresa Matriz
            /// </summary>
            public static readonly string EmpresaMatriz = "01";
            /// <summary>
            /// Nivel de Empresa
            /// </summary>
            public static readonly string Empresa = "02";
            /// <summary>
            /// Nivel de Proyecto
            /// </summary>
            public static readonly string Proyecto = "03";
        }

        /// <summary>
        /// Constantes de Sesiones
        /// </summary>
        public sealed class Sesiones
        {
            /// <summary>
            /// Sesión para Parrafos por Contrato
            /// </summary>
            public static readonly string SessionParrafoContrato = "SessionParrafosPorContrato";
            /// <summary>
            /// Sesión para los tipos de servicio de contrato
            /// </summary>
            public static readonly string SessionTipoServicio = "SessionTipoServicio";
            /// <summary>
            /// Sesión para los tipos de requerimiento del contrato
            /// </summary>
            public static readonly string SessionTipoRequerimiento = "SessionTipoRequerimiento";
            /// <summary>
            /// Sesión para Tipos de Bien
            /// </summary>
            public static readonly string SessionTipoBien = "SessionTipoBien";
            /// <summary>
            /// Sesión para tipos de tarifa
            /// </summary>
            public static readonly string SessionTipoTarifaBien = "SessionTipoTarifaBien";
            /// <summary>
            /// Sesión para Periodo de Alquiler
            /// </summary>
            public static readonly string SessionPeriodoAlquilerBien = "SessionPeriodoAlquilerBien";
            /// <summary>
            /// Sesión para Periodo de Alquiler
            /// </summary>
            public static readonly string SessionMonedaBien = "SessionMonedaBien";
            /// <summary>
            /// Sesión para el tipo de contenido de datos del bien
            /// </summary>
            public static readonly string SessionContenidoBien = "SessionContenidoBien";

        }

        /// <summary>
        /// Constantes de Tipos de Documentos
        /// </summary>
        public sealed class TipoDocumento
        {
            /// <summary>
            /// Tipo de Documento Contrato
            /// </summary>
            public static readonly string Contrato = "C";

            /// <summary>
            /// Tipo de Documento Adenda
            /// </summary>
            public static readonly string Adenda = "A";
        }
        /// <summary>
        /// Constantes de Tipos de Variables
        /// </summary>
        public sealed class TipoVariable
        {
            /// <summary>
            /// Variable de Tipo Texto
            /// </summary>
            public const string Texto = "T";

            /// <summary>
            /// Variable de Tipo Número
            /// </summary>
            public const string Numero = "N";

            /// <summary>
            /// Variable de Tipo Fecha
            /// </summary>
            public const string Fecha = "F";

            /// <summary>
            /// Variable de Tipo Imagen
            /// </summary>
            public const string Imagen = "I";

            /// <summary>
            /// Variable de Tipo Lista
            /// </summary>
            public const string Lista = "L";

            /// <summary>
            /// Variable de Tipo Lista de Equipos
            /// </summary>
            public const string ListaEquipo = "LE";

            /// <summary>
            /// Variable de Tipo Tabla
            /// </summary>
            public const string Tabla = "TBL";

            /// <summary>
            /// Variable de Tipo Bien
            /// </summary>
            public const string Bien = "BN";

            /// <summary>
            /// Variable de tipo firmante
            /// </summary>
            public const string Firmante = "FIR";

            /// <summary>
            /// Variable de tipo firmante Stracon
            /// </summary>
            public const string FirmanteStracon = "FIRS";
        }

        /// <summary>
        /// Constantes de Descripción de Tipos de Variables
        /// </summary>
        public sealed class DescripcionTipoVariable
        {
            /// <summary>
            /// Descripción de Variable de Tipo Texto
            /// </summary>
            public const string Texto = "Texto";

            /// <summary>
            /// Descripción de Variable de Tipo Número
            /// </summary>
            public const string Numero = "Número";

            /// <summary>
            /// Descripción de Variable de Tipo Fecha
            /// </summary>
            public const string Fecha = "Fecha";

            /// <summary>
            /// Descripción de Variable de Tipo Imagen
            /// </summary>
            public const string Imagen = "Imagen";

            /// <summary>
            /// Descripción de Variable de Tipo Lista
            /// </summary>
            public const string Lista = "Lista";

            /// <summary>
            /// Descripción de Variable de Tipo Lista de Equipos
            /// </summary>
            public const string ListaEquipo = "Lista de Equipos";

            /// <summary>
            /// Descripción de Variable de Tipo Tabla
            /// </summary>
            public const string Tabla = "Tabla";

            /// <summary>
            /// Descripción de Variable de Tipo Bien
            /// </summary>
            public const string Bien = "Bien";

            /// <summary>
            /// Descripción de variable de Tipo Firmante
            /// </summary>
            public const string Firmante = "Firmante";

            /// <summary>
            /// Descripción de variable de Tipo Firmante stracon
            /// </summary>
            public const string FirmanteStracon = "Firmante Stracon";
        }

        /// <summary>
        /// Constantes de Estados de Edición de Contratos
        /// </summary>
        public sealed class CodigoEstadoEdicion
        {
            /// <summary>
            /// Codigo de Estado de Edición Creación
            /// </summary>
            public static string Creacion = "C";

            /// <summary>
            /// Código de Estado de Edición Solicitada
            /// </summary>
            public static string Solicitada = "S";

            /// <summary>
            /// Código de Estado de Edición Solicitud Autorizada
            /// </summary>
            public static string SolicitudAutorizada = "SA";

            /// <summary>
            /// Código de Estado de Edición Solicitud Denegada
            /// </summary>
            public static string SolicitudDenegada = "SD";

            /// <summary>
            /// Código de Estado de Edición Editada
            /// </summary>
            public static string Editada = "E";

            /// <summary>
            /// Código de Estado de Edición Aprobada
            /// </summary>
            public static readonly string EdicionAprobada = "EA";

            /// <summary>
            /// Código de Estado de Edición Rechazada
            /// </summary>
            public static readonly string EdicionRechazada = "ER";

            /// <summary>
            /// Código de Estado de Edición Apelar Rechazo
            /// </summary>
            public static readonly string ApelarRechazo = "AR";

            /// <summary>
            /// Código de Estado de Edición parcial
            /// </summary>
            public static string EdicionParcial = "EP";
        }
        /// <summary>
        /// Características de los archivos del contrato
        /// </summary>
        public sealed class TipoArchivoCarga
        {
            /// <summary>
            /// Extension de archivo
            /// </summary>
            public static readonly string Foto = "F";

            /// <summary>
            /// Extension de archivo
            /// </summary>
            public static readonly string Apendice = "A";
        }
        /// <summary>
        /// Características de los archivos del contrato
        /// </summary>
        public sealed class ArchivosContrato
        {
            /// <summary>
            /// Extension de archivo
            /// </summary>
            public static readonly string ExtensionValidaCarga = "pdf";

            /// <summary>
            /// Descripción de la biblioteca de Documentos
            /// </summary>
            public static readonly string DescripcionBibliotecaSHP = "Biblioteca para archivos de Sistema de Gestión de Acciones y Entrenamiento";
        }
        /// <summary>
        /// Etiquetas HTML del contenido del Footer
        /// </summary>
        public sealed class ContenidoPiePaginaContrato
        {
            /// <summary>
            /// Contenido del Responsable
            /// </summary>
            public static readonly string EtiquetaResponsable = "Último Aprobador: {0}";
            /// <summary>
            /// Contenido de la fecha de aprobación.
            /// </summary>
            public static readonly string EtiquetaFechaAprobacion = "Fecha de Última Aprobación: {0}";
            /// <summary>
            /// Etiqueta COPIA NO OFICIAL
            /// </summary>
            public static readonly string EtiquetaCopiaNoOficial = "COPIA NO OFICIAL";
            /// <summary>
            /// Clase HTML que contiene al párrafo de pie de página del contrato.
            /// </summary>
            public static readonly string ClassDivPiePagina = "footerPdf";
        }
        /// <summary>
        /// Constantes de los Estados de Contratos Estadio
        /// </summary>
        public sealed class CodigoEstadoSolicitudEstadio
        {
            /// <summary>
            /// Estado de Aprobado
            /// </summary>
            public static readonly string Aprobado = "A";

            /// <summary>
            /// Estado de Iniciado
            /// </summary>
            public static readonly string Iniciado = "I";
            /// <summary>
            /// 
            /// </summary>
            public static readonly string Observado = "O";
        }

        /// <summary>
        /// Constantes de las Formas de Edición de Contrato
        /// </summary>
        public sealed class FormaEdicion
        {
            /// <summary>
            /// Forma de Edición Flexible
            /// </summary>
            public const string Flexible = "C";

            /// <summary>
            /// Forma de Edición Cerrado
            /// </summary>
            public const string Cerrado = "C";
        }

        /// <summary>
        /// Constantes de los Estados de Contratos
        /// </summary>
        public sealed class EstadoContrato2
        {
            /// <summary>
            /// Estado de Edición
            /// </summary>
            public static string Edicion = "E";

            /// <summary>
            /// Estado de Aprobación
            /// </summary>
            public static string Aprobacion = "A";

            /// <summary>
            /// Estado Vigente
            /// </summary>
            public static string Vigente = "V";

            /// <summary>
            /// Estado Terminado
            /// </summary>
            public static string Terminado = "T";

            /// <summary>
            /// Estado Vencido
            /// </summary>
            public static string Vencido = "C";
        }

        /// <summary>
        /// Constantes de los Tipos de Documentos de Identificación
        /// </summary>
        public sealed class TipoDocumentoIdentificacion
        {
            /// <summary>
            /// Tipo de Documento Ruc
            /// </summary>
            public static string Ruc = "02";
        }

        /// <summary>
        /// Constantes de los Montos Mínimos de Control
        /// </summary>
        public sealed class MontoMinimoControl
        {
            /// <summary>
            /// Monto Mínimo en Dólares
            /// </summary>
            public static string Dolares = "01";

            /// <summary>
            /// Monto Mínimo en Soles
            /// </summary>
            public static string Soles = "02";
        }

        /// <summary>
        /// Constantes de Tipo de Tarifa
        /// </summary>
        public sealed class TipoTarifa
        {
            /// <summary>
            /// Escalonado
            /// </summary>
            public static string Escalonado = "E";

            /// <summary>
            /// Fijo
            /// </summary>
            public static string Fijo = "F";
        }
        /// <summary>
        /// Constantes de Identificador de variables
        /// </summary>
        public sealed class IdentificadorVariable
        {
            /// <summary>
            /// Almohadilla
            /// </summary>
            public static string Almohadilla = "##";
        }

        /// <summary>
        /// Clase de enumerado que contiene los nombres de archivo para los reportes del sistema
        /// </summary>
        public static class ReporteNombreArchivo
        {
            /// <summary>
            /// Nombre del Reporte de Incidentes no cerrados
            /// </summary>
            public static readonly string ReporteIncidentesNoCerrados = "Reporte_Incidentes_NoCerrados";
            /// <summary>
            /// Nombre del Reporte de Tiempos de Atención
            /// </summary>
            public static readonly string ReporteTiempoAtencion = "TiempoAtencion";
            /// <summary>
            /// Nombre del Reporte de Hoja de Ruta
            /// </summary>
            public static readonly string ReporteHojaRuta = "HojaRuta";
            /// <summary>
            /// Nombre del Reporte de Estadio Actual de Contrato
            /// </summary>
            public static readonly string ReporteEstadioActualContrato = "EstadioActualContrato";
            /// <summary>
            /// Nombre del Reporte de Contrato Pendiente de Elaborar
            /// </summary>
            public static readonly string ReporteContratoPendienteElaborar = "ContratoPendienteElaborar";
            /// <summary>
            /// Nombre del Reporte de Contrato por Vencer
            /// </summary>
            public static readonly string ReporteContratoPorVencer = "ContratoPorVencer";
            /// <summary>
            /// Nombre del Reporte de Contrato por Estadio
            /// </summary>
            public static readonly string ReporteContratoPorEstadio = "ContratoPorEstadio";
            /// <summary>
            /// Nombre del Reporte de Bienes
            /// </summary>
            public static readonly string ReporteBienesContrato = "BienesContrato";
            /// <summary>
            /// Nombre del Reporte Listado de Contrato
            /// </summary>
            public static readonly string ReporteListadoContrato = "ListadoContrato";
            /// <summary>
            /// Nombre del Reporte de Contrato por Finalizar
            /// </summary>
            public static readonly string ReporteContratoPorFinalizar = "ContratoPorFinalizar";
            /// <summary>
            /// Nombre del Reporte de Consultas
            /// </summary>
            public static readonly string ReporteConsulta = "Consulta";

            /// <summary>
            /// Nombre del Reporte de Record
            /// </summary>
            public static readonly string ReporteRecord = "ReporteRecord";

            /// <summary>
            /// Reporte_General_Incidentes
            /// </summary>
            public static readonly string Reporte_General_Incidentes = "Reporte_General_Incidentes";

            /// <summary>
            /// ReporteInvestigacion
            /// </summary>
            public static readonly string ReporteInvestigacion = "ReporteInvestigacion";

            /// <summary>
            /// ReporteInvestigacion
            /// </summary>
            public static readonly string ReporteInvestigacionAprobados = "ReporteInvestigacionAprobados";

            /// <summary>
            /// Reporte_General_Registros
            /// </summary>
            public static readonly string Reporte_General_Registros = "Reporte_General_Registros";

            /// <summary>
            /// Nombre del Reporte de Incidente
            /// </summary>
            public static readonly string ReporteIncidente = "ReporteIncidente";

            /// <summary>
            /// Nombre del Reporte de Capacitación Por Colaborador
            /// </summary>
            public static readonly string ReporteCapacitacionPorColaborador = "ReporteCapacitacionColaborador";

            /// <summary>
            /// Nombre del Reporte de Ejecución Capacitación
            /// </summary>
            public static readonly string ReporteEjecucionCapacitacionPorProyectoEquipo = "ReporteEjecucionCapacitacion";

            /// <summary>
            /// Nombre del Reporte de Horas Capacitación
            /// </summary>
            public static readonly string ReporteHorasCapacitacionProyectoEquipo = "ReporteHorasCapacitacion";

            /// <summary>
            /// Reporte_General_Registros
            /// </summary>
            public static readonly string Reporte_General_Acciones = "Reporte_General_Acciones";

            /// <summary>
            /// Nombre del Reporte Por Proyecto Persona Ejecucion
            /// </summary>
            public static readonly string ReportePorProyectoPersonaAsistencia = "ReportePorProyectoPersonaAsistencia";

            /// <summary>
            /// Nombre del Reporte para la bandeja de HHT
            /// </summary>
            public static readonly string ReporteBandejaHHT = "ReporteBandejaHHT";

            /// <summary>
            /// Nombre del Reporte para la bandeja de Lesiones
            /// </summary>
            public static readonly string ReporteBandejaLesiones = "ReporteBandejaLesiones";

            /// <summary>
            /// Nombre del Reporte para el Reporte de Lesiones
            /// </summary>
            public static readonly string ReporteLesiones = "ReporteLesiones";

            /// <summary>
            /// Nombre del Reporte para la bandeja de Atenciones
            /// </summary>
            public static readonly string ReporteBandejaAtenciones = "ReporteBandejaAtenciones";

            /// <summary>
            /// Nombre del Reporte para la bandeja de Observaciones
            /// </summary>
            public static readonly string ReporteBandejaOPT = "ReporteBandejaOPT";

            /// <summary>
            /// Nombre del Reporte para la bandeja de Observaciones
            /// </summary>
            public static readonly string ReporteOPT = "ReporteOPT";

            /// <summary>
            /// Nombre del Reporte de BandejaAP_A
            /// </summary>
            public static readonly string Reporte_BandejaAP_A = "Reporte_BandejaAP_A";

            /// <summary>
            /// Nombre del Reporte de BandejaAP_B
            /// </summary>
            public static readonly string Reporte_BandejaAP_B = "Reporte_BandejaAP_B";

            /// <summary>
            /// /Nombre del Reporte de IngresoVisita
            /// </summary>
            public static readonly string ReporteIngresoVisita = "ReporteIngresoVisita";

            /// <summary>
            /// /Nombre del Reporte de Comite SSOMA
            /// </summary>
            public static readonly string ReporteComiteSSOMA = "ReporteComiteSSOMA";

            /// <summary>
            /// /Nombre del Reporte de Otros Registros
            /// </summary>
            public static readonly string ReporteOtrosRegistros = "ReporteOtrosRegistros";

            /// <summary>
            /// /Nombre del Reporte de Inspeccion
            /// </summary>
            public static readonly string ReporteInspecciones = "ReporteInspecciones";

            /// <summary>
            /// /Nombre del Reporte de la Bandeja de Inspecciones
            /// </summary>
            public static readonly string ReporteBandejaInspecciones = "ReporteBandejaInspecciones";

            /// <summary>
            /// /Nombre del Reporte de la Bandeja de Inspecciones
            /// </summary>
            public static readonly string ReporteInspeccionesXLS = "ReporteInspeccionesXLS";

            /// <summary>
            /// /Nombre del Reporte de Bandeja Reporte de Riesgos
            /// </summary>
            public static readonly string ReporteBandejaReporteRiesgos = "ReporteBandejaReporteRiesgos";

            /// <summary>
            /// /Nombre del Reporte de Reporte de Riesgos
            /// </summary>
            public static readonly string ReporteReporteRiesgos = "ReporteReporteRiesgos";

            /// <summary>
            /// /Nombre del Reporte de la Bandeja de Inspecciones
            /// </summary>
            public static readonly string ReporteReporteRiesgosXLS = "ReporteReporteRiesgosXLS";

            /// <summary>
            /// /Nombre del Reporte de Resumen por Colaborador para el reporte de Riesgos
            /// </summary>
            public static readonly string ReporteResumenColaborador = "ReporteResumenColaborador";
        }

        /// <summary>
        /// Constantes de los Identificadores de las Variables por Defecto
        /// </summary>
        public static class IdentificadorVariableDefecto
        {
            /// <summary>
            /// Identificador para Nombre de Proyecto
            /// </summary>
            public const string NombreProyecto = "##nombre_proyecto";
            /// <summary>
            /// Identificador para Número de Contrato
            /// </summary>
            public const string NumeroContrato = "##numero_contrato";
            /// <summary>
            /// Identificador para Nombre de Empresa
            /// </summary>
            public const string NombreEmpresa = "##nombre_empresa";
            /// <summary>
            /// Identificador para DNI del Primer Representante de Empresa
            /// </summary>
            public const string DniPrimerRepresentanteEmpresa = "##dni_primer_representante_empresa";
            /// <summary>
            /// Identificador para Primer Representante de Empresa
            /// </summary>
            public const string PrimerRepresentanteEmpresa = "##primer_representante_empresa";
            /// <summary>
            /// Identificador para DNI del Segundo Representante de Empresa
            /// </summary>
            public const string DniSegundoRepresentanteEmpresa = "##dni_segundo_representante_empresa";
            /// <summary>
            /// Identificador para Segundo Representante de Empresa
            /// </summary>
            public const string SegundoRepresentanteEmpresa = "##segundo_representante_empresa";
            /// <summary>
            /// Identificador para RUC de Proveedor
            /// </summary>
            public const string RucProveedor = "##ruc_proveedor";
            /// <summary>
            /// Identificador para Nombre de Proveedor
            /// </summary>
            public const string NombreProveedor = "##nombre_proveedor";
            /// <summary>
            /// Identificador para Nombre de Proveedor
            /// </summary>
            public const string ProveedorNombre = "##proveedor_nombre";
            /// <summary>
            /// Identificador para Moneda del Contrato
            /// </summary>
            public const string MonedaContrato = "##moneda_contrato";
            /// <summary>
            /// Identificador para Monto del Contrato
            /// </summary>
            public const string MontoContrato = "##monto_contrato";
            /// <summary>
            /// Identificador para Fecha de Inicio de Contrato
            /// </summary>
            public const string FechaInicioContrato = "##fecha_inicio_contrato";
            /// <summary>
            /// Identificador para Fecha de Fin de Contrato
            /// </summary>
            public const string FechaFinContrato = "##fecha_fin_contrato";
            /// <summary>
            /// Identificador para Fecha Actual
            /// </summary>
            public const string FechaActual = "##fecha_actual";
            /// <summary>
            /// Identificador para Fecha Actual en Letras
            /// </summary>
            public const string FechaActualLetra = "##fecha_actual_letras";
            /// <summary>
            /// Identificador para Dirección de Empresa
            /// </summary>
            public const string DireccionEmpresa = "##direccion_empresa";
            /// <summary>
            /// Identificador para Dirección de Proyecto
            /// </summary>
            public const string DireccionProyecto = "##direccion_proyecto";
            /// <summary>
            /// Identificador para los firmantes por defecto de STRACON
            /// </summary>
            public const string FirmaSGSA = "##firma_stracon";
        }

        /// <summary>
        /// Constantes de las culturas de país
        /// </summary>
        public static class Iternacionalizacion
        {
            /// <summary>
            /// Cultura para Perú
            /// </summary>
            public const string ES_PE = "ES-PE";
        }

        /// <summary>
        /// Clase de enumerado que contiene los códigos de tipos de respuesta observación
        /// </summary>
        public static class TipoRespuestaObservacion
        {
            /// <summary>
            /// Observación Aplica
            /// </summary>
            public static readonly string Aplica = "A";
            /// <summary>
            /// Observación No Aplica
            /// </summary>
            public static readonly string NoAplica = "N";
        }

        /// <summary>
        /// Clase enumerado que contiene los códigos de los tipos de notificación
        /// </summary>
        public static class TipoNotificacion
        {
            /// <summary>
            /// [SGSA] Contratos por Vencer
            /// </summary>
            public static readonly string ContratosPorVencer = "01";
            /// <summary>
            /// [SGSA] Nuevo Contrato en Bandeja
            /// </summary>
            public static readonly string NuevoContratoBandeja = "02";
            /// <summary>
            /// [SGSA] Nueva Consulta
            /// </summary>
            public static readonly string NuevaConsulta = "03";
            /// <summary>
            /// [SGSA] Respuesta de Consulta
            /// </summary>
            public static readonly string RespuestaConsulta = "04";
            /// <summary>
            /// [SGSA] Contrato Observado
            /// </summary>
            public static readonly string ContratosObservado = "05";
            /// <summary>
            /// [SGSA] Observación Rechazada
            /// </summary>
            public static readonly string ObservacionRechazada = "06";
            /// <summary>
            /// [SGSA] Contratos por Generar
            /// </summary>
            public static readonly string ContratosPorGenerar = "07";
            /// <summary>
            /// [SGSA] Registro o reenvio de Consulta
            /// </summary>
            public static readonly string RegistroConsultas = "13";
            /// <summary>
            /// [SGSA] Respuesta de Consulta
            /// </summary>
            public static readonly string RespuestaConsultas = "14";
        }

        /// <summary>
        /// Clase enumerado que contiene los códigos de los sistemas
        /// </summary>
        public sealed class IdentificadorSistema
        {
            /// <summary>
            /// Codigo del Identificador SGSA
            /// </summary>
            public const string IdentificadorSGSA = "SGSA";
        }
        /// <summary>
        /// Clase enumerado que las rutas de Opciones de la Aplicación
        /// </summary>
        public sealed class UrlOpcionesSistema
        {
            /// <summary>
            /// Codigo del Identificador SGSA
            /// </summary>
            public const string RutaBandejaContrato = "/Contractual/BandejaContrato";

            /// <summary>
            /// Codigo del Identificador SGSA
            /// </summary>
            public const string RutaConsulta = "/Contractual/Consulta";
        }
        /// <summary>
        /// Clase de enumerado que contiene los códigos de color para la alerta del contrato
        /// </summary>
        public static class AlertaVencimientoContrato
        {
            /// <summary>
            /// Código Color Ámbar
            /// </summary>
            public static readonly string Ambar = "01";
            /// <summary>
            /// Código Color Rojo
            /// </summary>
            public static readonly string Rojo = "02";
        }

        /// <summary>
        /// Clase enumerado que contiene los Tipos del Contenio Bien Registro
        /// </summary>
        public static class TipoContenidoBienRegistro
        {
            /// <summary>
            /// Tipo número de serie
            /// </summary>
            public static readonly string NumeroSerie = "NSR";
            /// <summary>
            /// Tipo Descripción
            /// </summary>
            public static readonly string Descripcion = "DSC";
            /// <summary>
            /// Tipo de Marca
            /// </summary>
            public static readonly string Marca = "MRC";
            /// <summary>
            /// Tipo de Modelo
            /// </summary>
            public static readonly string Modelo = "MDL";
        }

        /// <summary>
        /// Clase de enumerado que contiene los códigos de moneda
        /// </summary>
        public static class Moneda
        {
            /// <summary>
            /// Código de Moneda Soles
            /// </summary>
            public static readonly string Soles = "PEN";
            /// <summary>
            /// Código de Moneda Dólares
            /// </summary>
            public static readonly string Dolares = "USD";
        }

        /// <summary>
        /// Clase de enumerado que contiene los tipos de registro de un contrato
        /// </summary>
        public static class TipoRegistro
        {
            /// <summary>
            /// Tipo de guardado parcial
            /// </summary>
            public static readonly string Parcial = "PARCIAL";
            /// <summary>
            /// Tipo de guardado Total
            /// </summary>
            public static readonly string Total = "TOTAL";
        }

        /// <summary>
        /// Clase de enumerado que contiene el orden de los firmantes
        /// </summary>
        public static class OrdenFirmante
        {
            /// <summary>
            /// Primer Representante
            /// </summary>
            public static readonly int PrimerFirmante = 1;
            /// <summary>
            /// Segundo Representante
            /// </summary>
            public static readonly int SegundoFirmante = 2;
        }

        /// <summary>
        /// Configuración de la capa de presentación
        /// </summary>
        public sealed class ConfiguracionPresentacion
        {
            /// <summary>
            /// Titulo de la aplicación
            /// </summary>
            public static readonly string TituloAplicacion = ConfigurationManager.AppSettings["TituloSistema"];
        }

        /// <summary>
        /// Parametro de Web Config
        /// de la  Url de despliegue
        /// </summary>
        public sealed class ConfiguracionUrlDespliegue
        {
            /// <summary>
            /// Titulo de la aplicación
            /// </summary>
            public static readonly string DescripcionUrlDespligue = ConfigurationManager.AppSettings["URL_DESPLIEGUE"];
        }


        /// <summary>
        /// Clase de enumerado que contiene el orden de los firmantes
        /// </summary>
        public static class Recursos
        {
            /// <summary>
            /// Representante Legal
            /// </summary>
            public static readonly string RepresentanteLegal = "Representante Legal";
            /// <summary>
            /// Revisado por
            /// </summary>
            public static readonly string RevisadoPor = "Revisado por:";
        }

        /// <summary>
        /// Clase de enumerado que contiene las configuraciones de generación de contratos
        /// </summary>
        public static class ConfiguracionGeneracionContrato
        {
            /// <summary>
            /// Intervalo de Tiempo de Autoguardado
            /// </summary>
            public static readonly string IntervaloTiempoAutoguardado = "ASA";
            /// <summary>
            /// Url del logo de STRACON
            /// </summary>
            public static readonly string UrlLogoElectroPeru = "URL";
            /// <summary>
            /// Width del logo STRACON
            /// </summary>
            public static readonly string WidthLogo = "WLOG";
            /// <summary>
            /// Height de Logo STRACON
            /// </summary>
            public static readonly string HeightLogo = "HLOG";
        }
        /// <summary>
        /// Estados de la consulta
        /// </summary>
        public sealed class EstadoConsulta
        {
            /// <summary>
            /// Enviado
            /// </summary>
            public static readonly string Enviado = "EN";
            /// <summary>
            /// Reenviado
            /// </summary>
            public static readonly string Reenviado = "RE";
            /// <summary>
            /// Contestado
            /// </summary>
            public static readonly string Contestado = "CO";
            /// <summary>
            /// No aplica
            /// </summary>
            public static readonly string NoAplica = "NA";
        }
        /// <summary>
        /// Tipo de usuario
        /// </summary>
        public sealed class TipoUsuario
        {
            /// <summary>
            /// Enviado
            /// </summary>
            public static readonly string Destinatario = "D";
            /// <summary>
            /// Reenviado
            /// </summary>
            public static readonly string Remitente = "R";
        }


        /// <summary>
        /// Constantes de Empresa
        /// </summary>
        public sealed class Empresa
        {
            /// <summary>
            /// Codigo de la Stracon
            /// </summary>

            public static readonly string CodigoElectroPeru = ConfigurationManager.AppSettings["CODIGO_EMPRESA"];           
        }
        /// Constantes de parametros generales
        /// </summary>
        public sealed class ParametrosGenerales
        {
            //Codigo para Unidad Organizativa
            public const string CodigoIdentificadorUnidadOrganizativa = "205";
            /// <summary>
            /// Código de parametro general tipo nivel
            /// </summary>
            public const string CodigoNivel = "00001";
            public const string TipoUnidadOperativa = "00002";
            public const string TipoDocumentoIdentidad = "00001";
            public const string TipoVariable = "00003";
            public const string Periodicidad = "00004";
            public const string FormaGeneracion = "00005";
            public const string Cargo = "00006";
            public const string OperacionIntegracion = "00007";
            public const string ListaIndicadorAmbito = "00007";
            public const string ModeloConceptual = "00008";
            public const string TipoActividad = "";
            public const string EstadoCalendarizacion = "00009";
            public const string UnidadDeMedida = "00009";
            public const string EstadoActividad = "00010";
            public const string TipoIndicador = "00010";
            public const string EstadoCumplimiento = "00011";
            public const string Semana = "00011";            
            public const string Mes = "00012";
            public const string Trimestre = "00013";
            public const string Semestre = "00014";
            public const string FormaContrato = "00015";
            public const string RepositorioSharePoint = "00016";
            public const string TipoNotificacionSCC = "00017";
            public const string CuentaNotificacionSCC = "00018";
            public const string DominioEmpresa = "00019";
            public const string ConfiguracionSharePoint = "00020";
            public const string CredencialAcceso = "00021";
            public const string TipoDocumentoContrato = "00022";
            public const string EstadoVigencia = "00023";
            public const string TipoRespuestaObservacion = "00025";
            public const string MontoMinimoControl = "00026";
            public const string EstadoContrato = "00027";
            public const string EstadoEdicion = "00028";
            public const string Moneda = "00029";
            public const string RepositorioSharePointSGSA = "00030";
            public const string AlertaVencimientoContrato = "00031";
            public const string TipoOrden = "00032";
            public const string MontoAcumuladoParaContrato = "00033";
            public const string CuentaNotificacionSGSA = "00034";
            public const string URLSistemas = "00035";
            public const string TipoTarifaBien = "00036";
            public const string PeriodoAlquilerBien = "00037";
            public const string TipoDeBien = "00038";
            public const string ConfiguracionGeneracionContratos = "00039";
            public const string TipoNotificacion = "00040";
            public const string Valor = "00041";
            public const string TipoConsulta = "00042";
            public const string Area = "00043";
            public const string EstadoConsulta = "00044";
            //public const string CodigoPolitica = "00048";
            public const string CodigoPolitica = "00100";
            public const string CodProject = "00049";
            //public const string CodigoProyecto = "00103";
            public const string TipoDocumento = "00001";
            public const string CodCompany = "00050";
            public const string TipoClasificacion = "00102";
            public const string CodRisk = "00052";
            public const string CodigoRisk = "00104";
            public const string CodOperating = "00053";
            public const string CodigoOperating = "00101";
            public const string Idioma = "00005";
            public const string ConfiguracionIdiomaPorDefecto = "00108";
            public const string CodigoIdiomaPorDefecto = "EN-US";
            public const string CodigoIdiomaEspaniol = "ES-PE";
            public const string CodigoTipoAnexoFoto = "FOT";
            public const string CodigoTipoAnexoAdjunto = "ADJ";
            public const string CodigoPrioridad = "00119";
            public const string CodigoEstado = "00120";
            public const string EstadoRecord = "164";
            public const string EstadoRegistro = "414";
            public const string CodigoTipoAnexo = "00182";
            public const string ConsecuenciaIncidente = "183";
            public const string PotencialIncidente = "184";
            public const string CategoriaIncidente = "175";
            public const string CodigoProyecto = "121";
            public const string EstadoAccion = "00408";
            public const string CodigoNivelRecord = "00015";
            public const string TipoEmpresa = "00018";
            public const string TipoPlanilla = "00019";
            public const string TipoGenero = "00002";
            public const string CodigoEstadoCivil = "00047";
            public const string TipoSubProceso = "00190";
            public const string TipoProcesoCapacitacion = "00191";
            public const string CodigoProcesoAnuncio = "00437";
            public const string CodigoAlertaAnuncio = "00448";
            //constantes de investigacion
            public const string CodigoEmpresaInvolucrada = "00061";
            public const string AlcanceOperacion = "00027";
            public const string IncidenteTrabajo = "00028";
            public const string TurnoRegular = "00029";
            public const string TrabajoHabitual = "00030";
            public const string EstadosInvestigacion = "00031";
            public const string PlanEmergencia = "00032";
            public const string TipoGradoInstruccion = "00035";
            public const string CodigoActividadEmpresaRiego = "00036";
            public const string EntranamientoRecibido = "00037";
            public const string LicenciaConducir = "00038";
            public const string LicenciaInternaConducir = "00039";
            public const string TurnoMixo = "00040";
            public const string NecesarioAlcoholemia = "00041";
            public const string HizoExamen = "00042";
            public const string NecesarioDrogas = "00043";
            public const string IncidenteFatigaPersonal = "00044";
            public const string ReportoFatigaSupervisor = "00045";
            public const string SufrioLesion = "00046";
            public const string EstadoServicioIncidente = "00048";
            public const string TipoCondicionAmbiental = "00053";
            public const string CodigoRequerimiento = "00062";
            public const string CodigoParticipacion = "00063";
            public const string CodigoTipoCausaInmediata = "00064";
            public const string CodigoTipoContrato = "00065";
            public const string CodigoClasificacionPropiedad = "00070";
            public const string TipoControl = "00072";
            public const string CodigoPropiedad = "00074";
            public const string CodigoPropietario = "00075";
            //opciones no / si / no aplica
            public const string CodigoOpciones = "00076";
            public const string CalificacionFatigaPersonal = "00077";

            //Valores para Servidor Sharepoint 20-03-2017
            public const string CredencialAccesoSP = "00002";
            public const string RepositorioSP = "00003";
            public const string ConfiguracionServidorSP = "00004";
            public const string PesoMaximoArchivoAnexoSharePoint = "00005";
            public const string PesoMaximoArchivoFotoSharePoint = "00006";
            public const string Hpi = "00008";
            public const string UbicacionGeneral = "00009";
            public const string LugarTrabajo = "00010";
            public const string Probabilidad = "00011";
            public const string Severidad = "00012";
            public const string Riesgo = "00013";
            public const string Turno = "00016";
            public const string SupervisionMomentoIncidente = "00017";
            public const string IndicadorSufrioLesion = "00017";
            public const string HorasTurno = "00193"; //DACE
            public const string TipoIngresoDatosContratista = "00194";
            public const string MesesDelAnio = "00195";
            public const string AniosHHT = "00196";
            public const string ParametroFechaVencimientoHHT = "00197";
            public const string ParametroRestriccionMedica = "00198";
            public const string MedioTransporteGestionLesion = "00199";
            public const string DiagnosticoMedicoGestionLesion = "00200";
            public const string TipodeAtencionesMedicas = "00201";
            public const string RequiereSiguienteCitaGestionLesion = "00202";            
            public const string EstadosdeExpedientesMedicos = "00203";
            public const string TiposTrabajadorOPT = "00206";
            public const string TipoComportamientoOPT = "00207";
            public const string TipoNotificacionOPT = "00208";
            public const string TiposTareaOPT = "00209";
            public const string TiposAnexosGestionLesion = "00210";
            public const string TiposObservadoresOPT = "00211";
            public const string TiposAnexosObservacionPlaneada = "00213";
            public const string TiposAnexosInspecciones = "00440";
            public const string TiposAnexosReporteRiesgos = "00447";

            public const string TiposdeCondicionBarreraInvestigacion = "00214";
            public const string TiposdeBarreraInvestigacion = "00215";

            public const string ConfiguracionTareaAutomatica = "00021";

            public const string MayoresRiesgos = "130";
            public const string TipoLesion = "00165";
            public const string MecanismoLesion = "00054";
            public const string TipoLesionTiempoPerdido = "00055";
            public const string HrsLuegoIncidente = "00056";
            public const string CuerpoReceptorAfectado = "00057";
            public const string TipoImpactoMedioAmbiental = "00058";
            public const string AgenteContaminante = "00059";
            public const string EstadosAgenteContaminante = "00060";
            public const string TipoImpactoComunidad = "00066";
            public const string TipoPerdidaProceso = "00067";
            public const string ParalizacionProceso = "00068";
            public const string LesionesActuales = "00022";
            public const string ParteCuerpoLesionada = "00170";

            //Valores para Taxonomia
            public const string TipoRecordFoto = "03";
            public const string TipoRecordAnexo = "04";

            //Texto comentario por defecto
            public const string TextoPrimerComentario = "Se registró la acción";
            public const string EstadoPendienteAccion = "001";
            public const string TextoCerradoGerencia = "Cerrado por Gerencia";
            public const string TextoAnuladoGerencia = "Anulado por Gerencia";
            public const string TextoReabiertoGerencia = "Reabierto por Gerencia";

            //Texto primer record anexo insertado
            public const string TextoPrimerAnexoDefecto = "Anuncio de incidente";
            public const string CodigoTipoAnexoDefecto = "ADJ";
            public const string CodigoTipoApendiceDefecto = "ANI";

            //Texto primer record anexo insertado
            public const string TextoPrimerAnexoDefectoInvestigacion = "Investigación de incidente";
            public const string CodigoTipoAnexoDefectoInvestigacion = "ADJ";
            public const string CodigoTipoApendiceDefectoInvestigacion = "INV";

            //Pesos Maximo de los archivos para subir al sharepoint

            public const string Redireccionar = "187";

            //Descrpcion de las URL para los controles
            public const string UrlAccionString = "Seguimiento/Accion/";
            public const string UrlRecordsString = "Seguimiento/Records/";
            public const string UrlCapacitacionAsignacion = "Capacitacion/Asignacion";
            public const string UrlDepartamento = "Mantenimiento/Departamento";
            public const string UrlBandejaComiteSSoma = "ComiteSSoma/BandejaComiteSSoma";
            public const string UrlIngresoComiteSSoma = "ComiteSSoma/IngresoComiteSSoma";
            public const string UrlBandejaOtrosRegistros = "OtrosRegistros/IngresoOtrosRegistros";

            public const int pesoKb = 1024;

            //Descripcion Incidente Español - Ingles
            public const string TipoRecordIncidenteEsp = "Incidente";
            public const string TipoRecordIncidenteIng = "Incident";

            public const string ValorRecordIncidente = "009";


            //Valores de consecuencias de categorias: Actual - Potencial
            public const string ValorCategoriaConsecuenciaActual = "001";
            public const string ValorCategoriaConsecuenciaPotencial = "002";

            //Valores de la lista de tipos de categorias
            public const string CategoriaTipoProbabilidad = "PROB";
            public const string CategoriaTipoConsecuencia = "CONS";

            //Indicador Capacitacion Proyecto
            public const string IndicadorCapacitacion = "1";

            //Constantes de Asignacion (Módulo capacitación)
            public const string CodigoParametroEstadoColaborador = "00049";
            public const string CodigoParametroCondicionColaborador = "00050";

            //Constantes de Mantenimiento de Capacitación
            public const string CodigoParametroFamiliaEquipo = "00026";

            //Constantes de Costos de Incidencia
            public const string CodigoParametroTipoInvestigacionCosto = "00071";
            public const string CodigoParametroTipoInvestigacionCostoDetalle = "00073";

            //Constantes para filtrar solo Operador en Resultado Busqueda Colaborador
            public const string CondicionParametroOperador = "OPERADOR";

            //Constantes Codigo Tipo Permiso del Colaborador al Sistema 
            public const string CodigoTipoPermiso = "3";

            /// <summary>
            /// NumeroPagina
            /// </summary>
            public const string NumeroPagina = "0";
            /// <summary>
            /// CantidadRegistros
            /// </summary>
            public const string CantidadRegistros = "100000";

            //Codigo de Integrador Tipo Registro de Visita Gerencial
            public const string CodigoTipoRegistroParametroVisitaGerencial = "ITR01";

            //Codigo de Alertas (para semáforo)
            public const string CodigoColorSemaforo = "00429";

            //Codigo de Listas de Fuente de Inspección
            public const string CodigoFuenteInspeccion = "00430";

            //Codigo de Listas de Tipos de Inspección
            public const string CodigoTipoInspeccion = "00431";

            //Codigo de Listas de Tipos de Gestión
            public const string CodigoTipoGestion = "00432";

            /// <summary>
            /// Codigo de Tipos de Observador
            /// </summary>
            public const string TipoObservador = "00435";

            /// <summary>
            /// Parámetro que representa la lista de Correos para Notificar el Incidente
            /// </summary>                   
            public const string CorreoNotificacionIncidente = "00433";

            /// <summary>
            /// Parámetro que representa la lista de Procesos del Anuncio
            /// </summary>
            public const string ProcesoAnuncio = "00437";

            /// <summary>
            /// Parámetro que representa la lista de Inspeccion Gestion
            /// </summary>
            public const string ListaInspeccionGestion = "00442";

            /// <summary>
            /// Parámetro que representa la lista de Tipos de Reporte de Riesgos
            /// </summary>
            public const string ListaTipoReporte = "00443";

            /// <summary>
            /// Parámetro que representa la lista de Clasificación de Pérdida
            /// </summary>
            public const string ListaClasificacionPerdida = "00444";

            /// <summary>
            /// Parámetro que representa la lista de Causas Inmediatas
            /// </summary>
            public const string ListaCausasInmediatas = "00445";

            /// <summary>
            /// Parámetro que representa la lista de Clasificación de Reporte de Riesgo
            /// </summary>
            public const string ListaClasificacionReporteRiesgo = "00446";
        }

        /// <summary>
        /// Valores de Actúa Positivo
        /// </summary>
        public sealed class ParametrosActuaPositivo
        {
            /// <summary>
            /// Codigo Parametro de Condición
            /// </summary>
            public const string CodigoParametroCondicionValores = "00400";
            /// <summary>
            /// Codigo Idenficador de Herramienta Tarea Otros
            /// </summary>
            public const string CodigoHerramientaTareaOtros = "5d356893-4c85-4a3e-9c2e-1d6a8a44f60f";
        }
        /// <summary>
        /// Valores de Comité SSoma
        /// </summary>
        public sealed class ParametrosComiteSSoma
        {
            /// <summary>
            /// Codigo Tipo Comité
            /// </summary>
            public const string CodigoTipoComite= "00416";
            /// <summary>
            /// Codigo Comité Establecido
            /// </summary>
            public const string CodigoComite = "00417";
            /// <summary>
            /// Codigo Tipo de Reunión
            /// </summary>
            public const string CodigoTipoReunion = "00418";
            /// <summary>
            /// Codigo Estado Mínimo Accion del Documento
            /// </summary>
            public const string CodigoEstadoMinimoAccionDocumento = "00419";
            /// <summary>
            /// Codigo Estado Ingreso del Documento
            /// </summary>
            public const string CodigoEstadoIngresoDocumento = "00420";
            /// <summary>
            /// Codigo Estado del Documento
            /// </summary>
            public const string CodigoEstadoDocumento = "00421";
            /// <summary>
            /// Esquema de Tabla Comité SSoma
            /// </summary>
            public const string EsquemaTablaComiteSSoma = "[ACS].[COMITE_SSOMA]";
            /// <summary>
            /// Nombre del Campo de la Tabla Comité SSoma
            /// </summary>
            public const string NombreCampoSecuenciaComiteSSoma = "NUMERO_COMITE_SSOMA";
            /// <summary>
            /// Codigo de Tipos de Anexos de Comité SSoma
            /// </summary>
            public const string CodigoTiposAnexosComiteSSoma = "00423";
            /// <summary>
            /// Codigo de Tipos de Alertas de Comité SSoma
            /// </summary>
            public const string CodigoTipoAlerta = "00424";
            /// <summary>
            /// Codigo de Tipos de Participantes
            /// </summary>
            public const string CodigoTipoParticipante = "00425";
            /// <summary>
            /// Codigo de Tipos de Miembros
            /// </summary>
            public const string CodigoTipoMiembro = "00426";
            /// <summary>
            /// Codigo de Tipos de Cargos en la Empresa
            /// </summary>
            public const string CodigoTipoCargoEmpresa = "00427";
            /// <summary>
            /// Codigo de Tipos de Cargos en el comité
            /// </summary>
            public const string CodigoTipoCargoComite = "00428";
        }
        /// <summary>
        /// Valores de Tipos de Participantes de Comite SSoma
        /// </summary>
        public sealed class ParametrosTiposParticipanteComiteSSoma
        {
            /// <summary>
            /// Valor Empresa
            /// </summary>
            public const string Empresa = "EMP01";
            /// <summary>
            /// Valor Colaborador
            /// </summary>
            public const string Colaborador = "COL02";
            /// <summary>
            /// Valor Invitado
            /// </summary>
            public const string Invitado = "INV03";
        }
        /// <summary>
        /// Valores de Tipos de Participantes de Comite SSoma
        /// </summary>
        public sealed class ParametrosTiposParticipanteOtrosRegistros
        {
            /// <summary>
            /// Valor Empresa
            /// </summary>
            public const string Empresa = "EMP01";
            /// <summary>
            /// Valor Colaborador
            /// </summary>
            public const string Colaborador = "COL02";
            /// <summary>
            /// Valor Invitado
            /// </summary>
            public const string Invitado = "INV03";
        }
        /// <summary>
        /// Valores de Comité SSoma
        /// </summary>
        public sealed class ParametrosOtrosRegistros
        {
            /// <summary>
            /// Codigo Estado Mínimo Accion del Documento
            /// </summary>
            public const string CodigoEstadoMinimoAccionDocumento = "00419";
            /// <summary>
            /// Codigo Estado Ingreso del Documento
            /// </summary>
            public const string CodigoEstadoIngresoDocumento = "00420";
            /// <summary>
            /// Codigo Estado del Documento
            /// </summary>
            public const string CodigoEstadoDocumento = "00421";
            /// <summary>
            /// Esquema de Tabla Comité SSoma
            /// </summary>
            public const string EsquemaTablaOtrosRegistros = "[OTR].[OTROS_REGISTROS]";
            /// <summary>
            /// Nombre del Campo de la Tabla Comité SSoma
            /// </summary>
            public const string NombreCampoSecuenciaOtrosRegistros = "NUMERO_OTROS_REGISTROS";
            /// <summary>
            /// Codigo de Tipos de Anexos de Comité SSoma
            /// </summary>
            public const string CodigoTiposAnexosOtrosRegistros= "00423";
            /// <summary>
            /// Codigo de Tipos de Alertas de Otros Registros
            /// </summary>
            public const string CodigoTipoAlerta = "00424";
            /// <summary>
            /// Codigo de Tipos de Registro
            /// </summary>
            public const string CodigoTipoRegistro = "00000";
            /// <summary>
            /// Codigo de Tipos de Participantes
            /// </summary>
            public const string CodigoTipoParticipante = "00425";
            /// <summary>
            /// Codigo de Tipos de Cargos en la Empresa
            /// </summary>
            public const string CodigoTipoCargoEmpresa = "00427";
        }

        /// <summary>
        /// Valores de Tipos de Alertas
        /// </summary>
        public sealed class ParametrosTiposAlertas
        {
            /// <summary>
            /// Código valor Requiere Cierre
            /// </summary>
            public const string RequiereCierre = "ALE01";
            /// <summary>
            /// Código valor No Requiere Cierre
            /// </summary>
            public const string NoRequiereCierre = "ALE02";
            /// <summary>
            /// Código valor Anulado por Gerencia
            /// </summary>
            public const string AnuladaPorGerencia = "ALE03";
            /// <summary>
            /// Código valor Combinación No Definida
            /// </summary>
            public const string CombinacionNoDefinida = "ALE04";
        }

        /// <summary>
        /// Valores de Colores de Semaforos
        /// </summary>
        public sealed class ParametrosColorSemaforo
        {
            /// <summary>
            /// Color verde fdsfsdfsd
            /// </summary>
            public const string Verde = "1";
            /// <summary>
            /// Código valor No Requiere Cierre
            /// </summary>
            public const string Rojo = "2";
            /// <summary>
            /// Código valor Anulado por Gerencia
            /// </summary>
            public const string Plomo = "3";
            /// <summary>
            /// Código valor Combinación No Definida
            /// </summary>
            public const string Ambar = "4";
        }

        /// <summary>
        /// Valores de Gestion Lesiones
        /// </summary>
        public sealed class ParametrosGestionLesiones
        {
            /// <summary>
            /// Valor SI
            /// </summary>
            public const string ValorSi = "SI";
            /// <summary>
            /// Valor NO
            /// </summary>
            public const string ValorNo = "NO";
            /// <summary>
            /// Valor SI
            /// </summary>
            public const string ExpedientePorCerrarSi = "Si";
            /// <summary>
            /// Valor NO
            /// </summary>
            public const string ExpedientePorCerrarNo = "No";
        }



        /// <summary>
        /// Valores de Gestion Lesiones
        /// POL.PARAMETRO CODIGO_PARAMETRO 202
        /// </summary>
        public sealed class ParametrosRequiereSiguienteCita
        {
            /// <summary>
            /// Valor SI
            /// </summary>
            public const string RequiereCita_Si = "001";
            /// <summary>
            /// Valor NO
            /// </summary>
            public const string RequiereCita_No = "002";
            /// <summary>
            /// Valor Por Evaluar
            /// </summary>
            public const string RequiereCita_PorEvaluar = "003";
        }


        /// <summary>
        /// Valores de Visita Gerencial
        /// </summary>
        public sealed class ParametrosVisitaGerencial
        {
            /// <summary>
            /// Codigo Nivel de Riesgo
            /// </summary>
            public const string CodigoNivelRiesgo = "00409";

            /// </summary>
            public const string CodigoEstadoIngresoDocumento = "00420";
            /// <summary>
            /// Codigo Parametro Estado Ingreso Plan Acción
            /// </summary>
            public const string CodigoEstadoPlanAccion = "00405";
            /// <summary>
            /// Codigo Parametro Estado proceso Plan Acción
            /// </summary>
            public const string CodigoEstadoProcesoPlanAccion = "00406";
            /// <summary>
            /// Codigo Estado del Documento
            /// </summary>
            public const string CodigoEstadoDocumento = "00421";
            /// <summary>
            /// Codigo Estado Mínimo Accion del Documento
            /// </summary>
            public const string CodigoEstadoMinimoAccionDocumento = "00419";
            /// <summary>
            /// Codigo Registro Visita Gerencial
            /// </summary>
            public const string CodigoRegistroVisitaGerencial = "018";
            /// <summary>
            /// Codigo de  Ingresar Información SI
            /// </summary>
            public const string CodigoIngresarInformacionSi = "SI";
            /// <summary>
            /// Codigo de  Ingresar Información NO
            /// </summary>
            public const string CodigoIngresarInformacionNo = "NO";
            /// <summary>
            /// Valores de Lista de Confirmación Espaniol
            /// </summary>
            public static List<SelectListItem> ListaConfirmacion = new List<SelectListItem>()
            {
                new SelectListItem() { Text = "SÍ", Value = "SI"},
                new SelectListItem() { Text = "NO", Value = "NO"},
            };
            /// <summary>
            /// Valores de Lista de Confirmación Ingles
            /// </summary>
            public static List<SelectListItem> ListaConfirmacionIngles = new List<SelectListItem>()
            {
                new SelectListItem() { Text = "YES", Value = "SI"},
                new SelectListItem() { Text = "NO", Value = "NO"},
            };
            /// <summary>
            /// Esquema de Tabla Visita Gerencial
            /// </summary>
            public const string EsquemaTablaVisitaGerencial = "[VGE].[VISITA_GERENCIAL]";
            /// <summary>
            /// Nombre del Campo de la Tabla Comité SSoma
            /// </summary>
            public const string NombreCampoSecuenciaVisitaGerencial = "NUMERO_VISITA_GERENCIAL";
            /// <summary>
            /// Codigo de Tipos de Anexos de Visita Gerencial
            /// </summary>
            public const string CodigoTiposAnexosVisitaGerencial = "00422";

        }
        /// <summary>
        /// Valores de Tipo de Hallazgo
        /// </summary>
        public sealed class ParametrosTipoHallazgo
        {
            /// <summary>
            /// Valor Observación
            /// </summary>
            public const string Observacion = "TRV01";
            /// <summary>
            /// Valor Fortaleza
            /// </summary>
            public const string Fortaleza = "TRV02";
            /// <summary>
            /// Valor Oportunidad
            /// </summary>
            public const string Oportunidad = "TRV03";
            /// <summary>
            /// Valor Paso Procedimiento
            /// Modulo Observacion Planeada Tarea (OPT)
            /// </summary>
            public const string PasoProcedimiento = "TRV04";

        }

        /// <summary>
        /// Valores de Estado de registro
        /// </summary>
        public sealed class ParametrosEstadoRegistro
        {
            /// <summary>
            /// Valor No Requiere PA 
            /// </summary>
            public const string Activo = "414001";
            /// <summary>
            /// Valor Pendiente Observación 
            /// </summary>
            public const string Inactivo = "414002";
        }
      
        /// <summary>
        /// Valores de Estado de Visita  (Visita Gerencial)
        /// </summary>
        public sealed class ParametrosEstadoVisita
        {
            /// <summary>
            /// Valor No Requiere  
            /// </summary>
            public const string NoRequiere = "NRE01";
            /// <summary>
            /// Valor Pendiente de Hallazgo 
            /// </summary>
            public const string PendienteHallazgo = "PEH02";
            /// <summary>
            /// Valor Pendiente de Acciones 
            /// </summary>
            public const string PendienteAcciones= "PEA03";
            /// <summary>
            /// Valor Cerrado
            /// </summary>
            public const string Cerrado= "CER04";
            /// <summary>
            /// Valor Anulado Por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia= "ANG05";
            /// <summary>
            /// Valor Anulado 
            /// </summary>
            public const string Anulado= "ANU06"; 
        }

        /// <summary>
        /// Valores de Estado de Ingreso Plan Acción  (Visita Gerencial)
        /// </summary>
        public sealed class ParametrosEstadoIngresoPlanAccion
        {
            /// <summary>
            /// No Requiere
            /// </summary>
            public const string NoRequiere = "EPA01";
            /// <summary>
            /// Sin Información
            /// </summary>
            public const string SinInformacion = "EPA02";
            /// <summary>
            /// Abierto
            /// </summary>
            public const string Abierto = "EPA03";
            /// <summary>
            /// Cerrado
            /// </summary>
            public const string Cerrado = "EPA04";
            /// <summary>
            /// Anulado por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "EPA05";
          
        }

        /// <summary>
        /// Valores de Estado de Proceso Plan Acción  (Visita Gerencial)
        /// </summary>
        public sealed class ParametrosEstadoProcesoPlanAccion
        {
            /// <summary>
            /// No Requiere
            /// </summary>
            public const string NoRequiere = "EPP01";
            /// <summary>
            /// Sin Información
            /// </summary>
            public const string SinInformacion = "EPP02";
            /// <summary>
            /// Abierto En Fecha
            /// </summary>
            public const string AbiertoEnFecha = "EPP03";
            /// <summary>
            /// Valor Abierto Fuera de Fecha
            /// </summary>
            public const string AbiertoFueraDeFecha = "EPP04";
            /// <summary>
            /// Valor Cerrado en Fecha
            /// </summary>
            public const string CerradoEnFecha = "EPP05";
            /// <summary>
            /// Valor Abierto en Fecha
            /// </summary>
            public const string CerradoFueraDeFecha = "EPP06";
            /// <summary>
            /// Valor Anulado por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "EPP07";

        }


           
        /// <summary>
        /// Valores de Estado Minimo Acción del (Record Acción) Transversal
        /// </summary>
        public sealed class ParametrosEstadoMinimoAccion 
        {
            /// <summary>
            /// Estado Abierto
            /// </summary>
            public const string Abierto = "EMA01";
            /// <summary>
            /// Estado Reabierto
            /// </summary>
            public const string Reabierto = "EMA02";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "EMA03";
            /// <summary>
            /// Estado Cerrado Por Gerencia
            /// </summary>
            public const string CerradoPorGerencia = "EMA04";
            /// <summary>
            /// Estado Anulado Por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "EMA05";         
        }
        /// <summary>
        /// Valores de Estado Ingreso del Documento 
        /// </summary>
        public sealed class ParametrosEstadoIngresoDocumento
        {
            /// <summary>
            /// Estado No Requiere
            /// </summary>
            public const string NoRequiere = "EID01";
            /// <summary>
            /// Estado Pendiente de Hallazgo
            /// </summary>
            public const string PendienteHallazgo = "EID02";
            /// <summary>
            /// Estado Pendiente de Acciones
            /// </summary>
            public const string PendienteAcciones = "EID03";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "EID04";
            /// <summary>
            /// Estado Anulado Por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "EID05";
            /// <summary>
            /// Estado Anulado
            /// </summary>
            public const string Anulado = "EID06";

        }
        /// <summary>
        /// Valores de Estado Minimo Acción del Documento
        /// </summary>
        public sealed class ParametrosEstadoMinimoAccionDocumento
        {
            /// <summary>
            /// Estado Abierto
            /// </summary>
            public const string Abierto = "EMA01";
            /// <summary>
            /// Estado Reabierto
            /// </summary>
            public const string Reabierto = "EMA02";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "EMA03";
            /// <summary>
            /// Estado Cerrado Por Gerencia
            /// </summary>
            public const string CerradoPorGerencia = "EMA04";
            /// <summary>
            /// Estado Anulado Por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "EMA05";
            /// <summary>
            /// Estado No Requiere
            /// </summary>
            public const string NoRequiere = "EMA06";
            /// <summary>
            /// Estado Sin Información
            /// </summary>
            public const string SinInformacion = "EMA07";
        }
        /// <summary>
        /// Valores de Estado del Documento  
        /// </summary>
        public sealed class ParametrosEstadoDocumento
        {
            /// <summary>
            /// Estado Abierto
            /// </summary>
            public const string Abierto = "EDO01";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "EDO02";
            /// <summary>
            /// Estado Cerrado Por Gerencia
            /// </summary>
            public const string CerradoPorGerencia = "EDO03";
            /// <summary>
            /// Estado Anulada Por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "EDO04";
            /// <summary>
            /// Estado Reabierto
            /// </summary>
            public const string Reabierto = "EDO05";
            /// <summary>
            /// Estado Anulado
            /// </summary>
            public const string Anulado = "EDO06";
        }

        /// <summary>
        /// valores de los Codigos de tipo de perfiles para los usuarios SGATE
        /// </summary>
        public sealed class CodigoTipoPerfilUsuario
        {
            /// <summary>
            /// Es Administrador
            /// </summary>
            public const string EsAdministrador = "1";
            /// <summary>
            /// Es Colaborador
            /// </summary>
            public const string EsColaborador = "2";
            /// <summary>
            /// Es Instructor
            /// </summary>
            public const string EsInstructor = "3";
        }


        /// <summary>
        /// valores de los Códigos de Tipo de Frecuencia de Ejecución
        /// </summary>
        public sealed class CodigoTipoFrecuenciaEjecucion
        {
            /// <summary>
            /// Diario
            /// </summary>
            public const string Diario = "D";
            /// <summary>
            /// Semanal
            /// </summary>
            public const string Semanal = "S";
            /// <summary>
            /// Mensual
            /// </summary>
            public const string Mensual = "M";
        }

        /// <summary>
        /// valores de los Códigos de Titulos de Tareas
        /// </summary>
        public sealed class TitulosTareaNotificacion
        {
            /// <summary>
            /// Título para las Tareas de Notificación de HHT
            /// </summary>
            public const string TituloTareaHHT = "Ingresar Información de Horas Hombre Trabajadas";
            /// <summary>
            /// Título para las Tareas de Notificación de Visita Gerencial
            /// </summary>
            public const string TituloTareaVisitaGerencial = "Ingresar Notificación de Visita Gerencial";
        }

        /// <summary>
        /// Constantes de Sistema
        /// </summary>
        public sealed class Sistema
        {
            /// <summary>
            /// Codigo del Sistema SCC
            /// </summary>
            public const string CodigoSCC = "9DE41BC7-3A1C-481B-821B-FFE44AD9F0D5";
            /// <summary>
            /// Codigo del Sistema SGSA
            /// </summary>
            public static readonly string CodigoSGI = ConfigurationManager.AppSettings["CODIGO_SISTEMA"];
            /// <summary>
            /// Codigo del Sistema Trasciende
            /// </summary>
            public const string CodigoTRA = "390480EE-2D28-456D-98FE-05BC82316B8C";
        }

        /// <summary>
        /// Valores de la tabla MNT.TIPO_ANEXO
        /// </summary>
        public sealed class CodigoTipoAnexo
        {
            /// <summary>
            /// Tipo Decimal
            /// </summary>
            public const int AnuncioIncidente = 3;
        }

        /// <summary>
        /// valores de los Codigos de tipo de consecuencia
        /// </summary>
        public sealed class CodigoTipoConsecuenciaCategoria
        {
            /// <summary>
            /// Código consecuencia actual
            /// </summary>
            public const string Actual = "ACT";
            /// <summary>
            /// Código consecuencia potencial
            /// </summary>
            public const string Potencial = "POT";
        }

        public sealed class Periodicidad
        {
            /// <summary>
            /// Código Dia
            /// </summary>
            public const string Diario = "1";
            /// <summary>
            /// Código Semana
            /// </summary>
            public const string Semana = "2";
            /// <summary>
            /// Código Mes
            /// </summary>
            public const string Mensual = "3";
            /// <summary>
            /// Código Trimestre
            /// </summary>
            public const string Trimestral = "4";
            /// <summary>
            /// Código Semestre
            /// </summary>
            public const string Semestral = "5";
            /// <summary>
            /// Código Semestre
            /// </summary>
            public const string Anual = "6";
        }

        public sealed class IndicadorAmbito
        {
            /// <summary>
            /// Código Dia
            /// </summary>
            public const int PlanOperativo = 1;
            /// <summary>
            /// Código Semana
            /// </summary>
            public const int PlanEstrategico = 2;
            /// <summary>
            /// Código Mes
            /// </summary>
            public const int InformeEjecutivoGestion = 3;
            /// <summary>
            /// Código Trimestre
            /// </summary>
            public const int Otros = 4;            
        }


        /// <summary>
        /// Valores de la tabla POL.PARAMETRO where CODIGO_PARAMETRO = 183
        /// </summary>
        public sealed class CodigoConsecuenciaIncidente
        {
            /// <summary>
            /// Consecuencia Insignificante
            /// </summary>
            public const string Insignificante = "INS";
            /// <summary>
            /// Consecuencia Menor
            /// </summary>
            public const string Menor = "MEN";
            /// <summary>
            /// Consecuencia Moderado
            /// </summary>
            public const string Moderado = "MOD";
            /// <summary>
            /// Consecuencia Mayor
            /// </summary>
            public const string Mayor = "MAY";
            /// <summary>
            /// Consecuencia Crítico
            /// </summary>
            public const string Critico = "CRI";
        }

        /// <summary>
        /// Valores de la lista de LesionActual FormularioLesionTrabajador        
        /// </summary>
        public sealed class CodigoLesionActualTrabajadorLesionado
        {
            /// <summary>
            /// Fatalidad
            /// </summary>
            public const string Fatalidad = "FTL";
            /// <summary>
            /// Lesion Tiempo Perdido
            /// </summary>
            public const string LesionTiempoPerdido = "LTP";
            /// <summary>
            /// Lesion Trabajo Restringido
            /// </summary>
            public const string LesionTrabajoRestringido = "LTR";
            /// <summary>
            /// Lesion Tratamiento Medico
            /// </summary>
            public const string LesionTratamientoMedico = "LTM";
            /// <summary>
            /// Lesion Primeros Auxilios
            /// </summary>
            public const string LesionPrimerosAuxilios = "LPA";
        }

        /// <summary>
        /// Valores de la tabla POL.PARAMETRO where CODIGO_PARAMETRO = 8
        /// </summary>
        public sealed class CodigoValoresHPI
        {
            /// <summary>
            /// Valor SI
            /// </summary>
            public const string SI = "01";
            /// <summary>
            /// Valor NO
            /// </summary>
            public const string NO = "02";
        }

        /// <summary>
        /// Constantes de Tipo de Dato
        /// </summary>
        public sealed class TipoDato
        {
            /// <summary>
            /// Tipo Decimal
            /// </summary>
            public const string Decimal = "DEC";
            /// <summary>
            /// Tipo Encriptado
            /// </summary>
            public const string Encriptado = "ENC";
            /// <summary>
            /// Tipo Entero
            /// </summary>
            public const string Entero = "ENT";
            /// <summary>
            /// Tipo Fecha
            /// </summary>
            public const string Fecha = "FEC";
            /// <summary>
            /// Tipo Texto
            /// </summary>
            public const string Texto = "TEX";
        }

        /// <summary>
        /// Constantes de Tipo de Parámetro
        /// </summary>
        public sealed class TipoParametro
        {
            /// <summary>
            /// Tipo de Parámetro Común
            /// </summary>
            public const string Comun = "C";
            /// <summary>
            /// Tipo de Parámetro Sistema
            /// </summary>
            public const string Sistema = "S";
            /// <summary>
            /// Tipo de Parámetro Funcional
            /// </summary>
            public const string Funcional = "F";
        }
        public sealed class ConfiguracionFileServer
        {
            /// <summary>
            /// Ubicacion de fotos del colaborador
            /// </summary>
            public static readonly string UbicacionFotoColaborador = ConfigurationManager.AppSettings["FileServerUbicacionFotoColaborador"];
        }
        public sealed class Meses
        {
            public static List<SelectListItem> ListaMes = new List<SelectListItem>()
            {
                new SelectListItem() { Text = "Enero",        Value = "1",Selected="1"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Febrero",      Value = "2" ,Selected="2"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Marzo",        Value = "3" ,Selected="3"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Abril",        Value = "4" ,Selected="4"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Mayo",         Value = "5" ,Selected="5"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Junio",        Value = "6" ,Selected="6"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Julio",        Value = "7" ,Selected="7"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Agosto",       Value = "8" ,Selected="8"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Septiembre",   Value = "9" ,Selected="9"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Octubre",      Value = "10" ,Selected="10"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Noviembre",    Value = "11" ,Selected="11"==DateTime.Now.Month.ToString() },
                new SelectListItem() { Text = "Diciembre",    Value = "12" ,Selected="12"==DateTime.Now.Month.ToString() }
            };

            public static List<SelectListItem> ListaMesNumerico = new List<SelectListItem>()
            {
                new SelectListItem() { Text = "00",    Value = "0"},
                new SelectListItem() { Text = "01",        Value = "1"},
                new SelectListItem() { Text = "02",      Value = "2"},
                new SelectListItem() { Text = "03",        Value = "3"  },
                new SelectListItem() { Text = "04",        Value = "4" },
                new SelectListItem() { Text = "05",         Value = "5"  },
                new SelectListItem() { Text = "06",        Value = "6" },
                new SelectListItem() { Text = "07",        Value = "7"  },
                new SelectListItem() { Text = "08",       Value = "8" },
                new SelectListItem() { Text = "09",   Value = "9" },
                new SelectListItem() { Text = "10",      Value = "10"},
                new SelectListItem() { Text = "11",    Value = "11" }
            };
        }

        public sealed class Anios
        {
            public static List<SelectListItem> ListaAnios(int anioActual, List<int> anios)
            {
                List<SelectListItem> ListaMeses = new List<SelectListItem>();
                //int anioMin = DateTime.Now.Year - 4;
                //int anioMax = DateTime.Now.Year + 4;
                foreach (int i in anios.FindAll(p => p >= anioActual).OrderBy(x => x))
                {
                    ListaMeses.Add(new SelectListItem() { Text = i.ToString(), Value = i.ToString(), Selected = i == anioActual });
                }

                //for (int i = anioActual; i <= anios; i++)
                //{
                //    ListaMeses.Add(new SelectListItem() { Text = i.ToString(), Value = i.ToString(), Selected = i == anioActual });
                //}
                return ListaMeses;
            }
        }
        public sealed class Horas
        {
            public static List<SelectListItem> ListaHoras = new List<SelectListItem>()
            {
                    new SelectListItem() { Text = "00", Value = "00"},
                    new SelectListItem() { Text = "01", Value = "01"},
                    new SelectListItem() { Text = "02", Value = "02"},
                    new SelectListItem() { Text = "03", Value = "03"},
                    new SelectListItem() { Text = "04", Value = "04"},
                    new SelectListItem() { Text = "05", Value = "05"},
                    new SelectListItem() { Text = "06", Value = "06"},
                    new SelectListItem() { Text = "07", Value = "07"},
                    new SelectListItem() { Text = "08", Value = "08"},
                    new SelectListItem() { Text = "09", Value = "09"},
                    new SelectListItem() { Text = "10", Value = "10"},
                    new SelectListItem() { Text = "11", Value = "11"},
                    new SelectListItem() { Text = "12", Value = "12"},
                    new SelectListItem() { Text = "13", Value = "13"},
                    new SelectListItem() { Text = "14", Value = "14"},
                    new SelectListItem() { Text = "15", Value = "15"},
                    new SelectListItem() { Text = "16", Value = "16"},
                    new SelectListItem() { Text = "17", Value = "17"},
                    new SelectListItem() { Text = "18", Value = "18"},
                    new SelectListItem() { Text = "19", Value = "19"},
                    new SelectListItem() { Text = "20", Value = "20"},
                    new SelectListItem() { Text = "21", Value = "21"},
                    new SelectListItem() { Text = "22", Value = "22"},
                    new SelectListItem() { Text = "23", Value = "23"}    
            };
        }
        public sealed class Minutos
        {
            public static List<SelectListItem> ListaMinutos = new List<SelectListItem>()
            {
   new SelectListItem() { Text = "00", Value = "00"},
            new SelectListItem() { Text = "01", Value = "01"},
            new SelectListItem() { Text = "02", Value = "02"},
            new SelectListItem() { Text = "03", Value = "03"},
            new SelectListItem() { Text = "04", Value = "04"},
            new SelectListItem() { Text = "05", Value = "05"},
            new SelectListItem() { Text = "06", Value = "06"},
            new SelectListItem() { Text = "07", Value = "07"},
            new SelectListItem() { Text = "08", Value = "08"},
            new SelectListItem() { Text = "09", Value = "09"},
            new SelectListItem() { Text = "10", Value = "10"},
            new SelectListItem() { Text = "11", Value = "11"},
            new SelectListItem() { Text = "12", Value = "12"},
            new SelectListItem() { Text = "13", Value = "13"},
            new SelectListItem() { Text = "14", Value = "14"},
            new SelectListItem() { Text = "15", Value = "15"},
            new SelectListItem() { Text = "16", Value = "16"},
            new SelectListItem() { Text = "17", Value = "17"},
            new SelectListItem() { Text = "18", Value = "18"},
            new SelectListItem() { Text = "19", Value = "19"},
            new SelectListItem() { Text = "20", Value = "20"},
            new SelectListItem() { Text = "21", Value = "21"},
            new SelectListItem() { Text = "22", Value = "22"},
            new SelectListItem() { Text = "23", Value = "23"},
            new SelectListItem() { Text = "24", Value = "24"},
            new SelectListItem() { Text = "25", Value = "25"},
            new SelectListItem() { Text = "26", Value = "26"},
            new SelectListItem() { Text = "27", Value = "27"},
            new SelectListItem() { Text = "28", Value = "28"},
            new SelectListItem() { Text = "29", Value = "29"},
            new SelectListItem() { Text = "30", Value = "30"},
            new SelectListItem() { Text = "31", Value = "31"},
            new SelectListItem() { Text = "32", Value = "32"},
            new SelectListItem() { Text = "33", Value = "33"},
            new SelectListItem() { Text = "34", Value = "34"},
            new SelectListItem() { Text = "35", Value = "35"},
            new SelectListItem() { Text = "36", Value = "36"},
            new SelectListItem() { Text = "37", Value = "37"},
            new SelectListItem() { Text = "38", Value = "38"},
            new SelectListItem() { Text = "39", Value = "39"},
            new SelectListItem() { Text = "40", Value = "40"},
            new SelectListItem() { Text = "41", Value = "41"},
            new SelectListItem() { Text = "42", Value = "42"},
            new SelectListItem() { Text = "43", Value = "43"},
            new SelectListItem() { Text = "44", Value = "44"},
            new SelectListItem() { Text = "45", Value = "45"},
            new SelectListItem() { Text = "46", Value = "46"},
            new SelectListItem() { Text = "47", Value = "47"},
            new SelectListItem() { Text = "48", Value = "48"},
            new SelectListItem() { Text = "49", Value = "49"},
            new SelectListItem() { Text = "50", Value = "50"},
            new SelectListItem() { Text = "51", Value = "51"},
            new SelectListItem() { Text = "52", Value = "52"},
            new SelectListItem() { Text = "53", Value = "53"},
            new SelectListItem() { Text = "54", Value = "54"},
            new SelectListItem() { Text = "55", Value = "55"},
            new SelectListItem() { Text = "56", Value = "56"},
            new SelectListItem() { Text = "57", Value = "57"},
            new SelectListItem() { Text = "58", Value = "58"},
            new SelectListItem() { Text = "59", Value = "59"},
            

            };
        }

        public sealed class ReporteFormato
        {
            public const string PDF = "pdf";
            public const string EXCEL = "excel";
            public const string EXCELOPENXML = "EXCELOPENXML";
            public const string WORD = "word";
            public const string WORDOPENXML = "WORDOPENXML";
        }

        public static Dictionary<string, string> ObtenerExtensionReporte
        {
            get
            {
                var formatExtension = new Dictionary<string, string>
                {   
                    {ReporteFormato.PDF, ".pdf"},
                    {ReporteFormato.EXCEL, ".xls"},
                    {ReporteFormato.EXCELOPENXML, ".xlsx"},
                    {ReporteFormato.WORD, ".doc"},
                    {ReporteFormato.WORDOPENXML, ".docx"},
                    
                };
                return formatExtension;
            }
        }
        public sealed class TipoDocumentoIdentidad
        {
            /// <summary>
            /// Tipo Dni
            /// </summary>
            public const string Dni = "01";
            /// <summary>
            /// Tipo RUC
            /// </summary>
            public const string Ruc = "02";
        }
        public sealed class TipoVisualizacionUnidadOperativa
        {
            /// <summary>
            /// Responsable
            /// </summary>
            public const string Responsable = "RES";
            /// <summary>
            /// Representantes y Dirección
            /// </summary>
            public const string RepresentanteDireccion = "REPDIR";
        }
        public sealed class TipoContrato
        {
            public static string Contrato = "1";
            public static string Vacaciones = "2";
            public static string CentroCosto = "3";
        }
        public sealed class TipoContratoDescripcion
        {

            public static readonly Dictionary<string, string> ListaValores = new Dictionary<string, string>() { 
            { TipoContrato.Contrato, "Contrato" },
            { TipoContrato.Vacaciones, "Vacaciones" },
            { TipoContrato.CentroCosto, "Centro Costo" } };
        }

        /// <summary>
        /// Constantes de Tipo de Sección
        /// </summary>
        public sealed class TipoSeccion
        {
            /// <summary>
            /// Tipo de Sección Izquierda
            /// </summary>
            public const string Izquierda = "001";
            /// <summary>
            /// Tipo de Sección Cuerpo
            /// </summary>
            public const string Cuerpo = "002";
            /// <summary>
            /// Tipo de Sección Tab
            /// </summary>
            public const string Tab = "003";
            /// <summary>
            /// Tipo de Sección Panel
            /// </summary>
            public const string Panel = "004";
            /// <summary>
            /// Tipo de Sección Contenido
            /// </summary>
            public const string Contenido = "005";
        }


        /// <summary>
        /// Constantes de Tipo de Llenado Combo
        /// </summary>
        public sealed class TipoLlenadoCombo
        {
            /// <summary>
            /// Tipo de Llenado Parametro
            /// </summary>
            public const string LlenadoParametro = "001";
            /// <summary>
            /// Tipo de Llenado tabla
            /// </summary>
            public const string LlenadoTabla = "002";

        }

        /// <summary>
        /// Constantes de Tipo de Control
        /// </summary>
        public sealed class TipoControl
        {
            /// <summary>
            /// Tipo de Control TextBox Texto
            /// </summary>
            public const string TextBoxTexto = "001";
            /// <summary>
            /// Tipo de Control TextBox Número
            /// </summary>
            public const string TextBoxNumero = "002";
            /// <summary>
            /// Tipo de Control Lista Desplegable
            /// </summary>
            public const string ComboBox = "003";
            /// <summary>
            /// Tipo de Control Carga de Archivo
            /// </summary>
            public const string FileUpload = "004";
            /// <summary>
            /// Tipo de Control CheckBox
            /// </summary>
            public const string CheckBox = "005";
            /// <summary>
            /// Tipo de Control RadioButton
            /// </summary>
            public const string RadioButton = "006";
            /// <summary>
            /// Tipo de Control Calendario
            /// </summary>
            public const string DatePicker = "007";
            /// <summary>
            /// Tipo de Control Hora
            /// </summary>
            public const string Time = "008";
            /// <summary>
            /// Tipo de Control Área de Texto
            /// </summary>
            public const string TextArea = "009";
            /// <summary>
            /// Tipo de Control Botón
            /// </summary>
            public const string Button = "010";
        }

        /// <summary>
        /// Constantes de Tipo de Vista
        /// </summary>
        public sealed class TipoVista
        {
            /// <summary>
            /// Tipo de Vista Apendice
            /// </summary>
            public const string VistaApendice = "Apendice";
            /// <summary>
            /// Tipo de Vista Fotos
            /// </summary>
            public const string VistaFoto = "Foto";
            /// <summary>
            /// Tipo de Vista Accion
            /// </summary>
            public const string VistaAccion = "Accion";
        }

        /// <summary>
        /// Constantes de Estado de Record
        /// </summary>
        public sealed class EstadoRecord
        {
            /// <summary>
            /// Estado de Record Generado
            /// </summary>
            public const string Generado = "GEN";

            /// <summary>
            /// Estado de Record Enviado
            /// </summary>
            public const string Enviado = "ENV";

            /// <summary>
            /// Estado de Record Reenviado
            /// </summary>
            public const string Reenviado = "REE";

            /// <summary>
            /// Estado de Record Cerrado
            /// </summary>
            public const string Cerrado = "CER";
        }

        /// <summary>
        /// Constantes de Estado de Record Sustento
        /// </summary>
        public sealed class EstadoRecordSustento
        {
            /// <summary>
            /// Estado de Record Generado
            /// </summary>
            public const string Generado = "GEN";
            /// <summary>
            /// Estado de Record Cerrado
            /// </summary>
            public const string Cerrado = "CER";
        }

        /// <summary>
        /// Constantes de Configuración del Menú de Opciones
        /// </summary>
        public sealed class ConfiguracionMenuOpciones
        {
            /// <summary>
            /// Código del Módulo de Records
            /// </summary>
            public const string ModuloRecord = "mdlRecord";
            /// <summary>
            /// Código del Módulo de Acciones
            /// </summary>
            public const string ModuloAccion = "mdlAccion";
            /// <summary>
            /// Código del Módulo de Capacitacion
            /// </summary>
            public const string ModuloCapacitacion = "mdlCapacitacion";
            /// <summary>
            /// Código del Módulo de Configuraciones
            /// </summary>
            public const string ModuloConfiguracion = "mdlConfiguracion";
        }

        /// <summary>
        /// Constantes de Tipo de Anexo
        /// </summary>
        public sealed class TipoAnexo
        {
            /// <summary>
            /// Tipo de Anexo Foto
            /// </summary>
            public static readonly string TipoAnexoFoto = "FOT";
            /// <summary>
            /// Tipo de Anexo Adjunto
            /// </summary>
            public static readonly string TipoAnexoAdjunto = "ADJ";
        }

        /// <summary>
        /// Constantes de Estados de Acción
        /// </summary>
        public sealed class EstadoAccion
        {
            /// <summary>
            /// Estado de Acción Abierto
            /// </summary>
            //public static readonly string Pendiente = "001";
            public static readonly string Abierto = "EMA01";
            /// <summary>
            /// Estado de Acción En Reabierto
            /// </summary>
            //public static readonly string EnProceso = "002";
            public static readonly string Reabierto = "EMA02";
            /// <summary>
            /// Estado de Acción Cerrado
            /// </summary>
            //public static readonly string Completado = "003";
            public static readonly string Cerrado = "EMA03";
            /// <summary>
            /// Estado de Acción CerradoPorGerencia
            /// </summary>
            //public static readonly string Cerrado = "004";
            public static readonly string CerradoPorGerencia = "EMA04";

            /// <summary>
            /// Estado de Acción CerradoPorGerencia
            /// </summary>            
            public static readonly string AnuladoPorGerencia = "EMA05";
        }

        /// <summary>
        /// Constantes de Estados de Investigacion
        /// </summary>
        public sealed class EstadoInvestigacion
        {
            /// <summary>
            /// Estado de Acción Pendiente
            /// </summary>
            public static readonly string PorElaborar = "POREL";
            /// <summary>
            /// Estado de Acción En Proceso
            /// </summary>
            public static readonly string PorRevisar = "PORRE";
            /// <summary>
            /// Estado de Acción Completado
            /// </summary>
            public static readonly string PorAprobar = "PORAP";
            /// <summary>
            /// Estado de Acción Completado
            /// </summary>
            public static readonly string Aprobado = "APROB";
        }

        /// <summary>
        /// Indicador para listar las Investigaciones y permitir Aprobaciones Extraordinarias
        /// </summary>
        public sealed class AprobacionExtraordinariaInvestigacion
        {
            /// <summary>
            /// Indicador para listar las Aprobaciones Extraordinarias
            /// </summary>
            public static readonly string AprobacionExtraordinaria = "APREX";

            /// <summary>
            /// Comentario de las Aprobaciones Extraordinarias
            /// </summary>
            public static readonly string ComentarioAprobacionExtraordinaria = "Aprobación extraordinaria por Gerencia.";
        }

        /// <summary>
        /// Orden de Estados de Investigacion
        /// </summary>
        public static Dictionary<string, int> ObtenerOrdenEstadosInvestigacion
        {
            get
            {
                var ordenInvestigacion = new Dictionary<string, int>
                { 
                    {EstadoInvestigacion.PorElaborar, 1},
                    {EstadoInvestigacion.PorRevisar, 2},
                    {EstadoInvestigacion.PorAprobar, 3},
                    {EstadoInvestigacion.Aprobado, 4},  
                };
                return ordenInvestigacion;
            }
        }


        /// <summary>
        /// Variables de Configuración de Servicio
        /// </summary>
        public sealed class ConfiguracionSendMail
        {
            /// <summary>
            /// ConexionSegura_SMTP
            /// </summary>
            public static readonly string ConexionSegura_SMTP = ConfigurationManager.AppSettings["CONEXION_SEGURA_SMTP"];
            /// <summary>
            /// ServidorSMTP
            /// </summary>
            public static readonly string ServidorSMTP = ConfigurationManager.AppSettings["SERVIDOR_SMTP"];
            /// <summary>
            /// NombreUsuarioSMTP
            /// </summary>
            public static readonly string NombreUsuarioSMTP = ConfigurationManager.AppSettings["NOMBRE_USUARIO_SMTP"];
            /// <summary>
            /// UsuarioSMTP
            /// </summary>
            public static readonly string UsuarioSMTP = ConfigurationManager.AppSettings["USUARIO_SMTP"];
            /// <summary>
            /// EmailUsuarioSMTP
            /// </summary>
            public static readonly string EmailUsuarioSMTP = ConfigurationManager.AppSettings["EMAIL_USUARIO_SMTP"];
            /// <summary>
            /// PasswordSMTP
            /// </summary>
            public static readonly string PasswordSMTP = ConfigurationManager.AppSettings["PASSWORD_SMTP"];
            /// <summary>
            /// Puerto_SMTP
            /// </summary>
            public static readonly string Puerto_SMTP = ConfigurationManager.AppSettings["PUERTO_SMTP"];
        }

        /// <summary>
        /// Variables de Configuración de Reporting
        /// </summary>
        public sealed class ConfiguracionReporting
        {
            /// <summary>
            /// ReporteServerUrl
            /// </summary>
            public static readonly string ReporteServerUrl = ConfigurationManager.AppSettings["SrvReportingUrl"];
            /// <summary>
            /// ReporteRuta
            /// </summary>
            public static readonly string ReporteRuta = ConfigurationManager.AppSettings["SrvReportingSGSAWorkspace"];
        }

        /// <summary>
        /// Variables de Configuración para el tipo de Reporte
        /// </summary>
        public sealed class TipoReporte
        {
            /// <summary>
            /// Reporte responsable
            /// </summary>
            public const string Responsable = "0001";

            /// <summary>
            /// Reporte proyecto departamento
            /// </summary>
            public const string ProyectoDepartamento = "0002";

            /// <summary>
            /// Reporte automática total
            /// </summary>
            public const string AutomaticaTotal = "0003";
        }

        /// <summary>
        /// Variables de para el tipo de plantilla de correo
        /// </summary>
        public sealed class TipoPlantillaCorreo
        {
            /// <summary>
            /// Reporte responsable pendientes
            /// </summary>
            public const string AutomaticaPorResponsable = "00001";
            /// <summary>
            /// Reporte responsable vencidas
            /// </summary>
            public const string AutomaticaPorProyectoDepartamento = "00002";

            /// <summary>
            /// Reporte proyecto departamento
            /// </summary>
            public const string AutomaticaTotal = "00003";

            /// <summary>
            /// Correo del flash de incidente
            /// </summary>
            public const string CorreoFlashdelIncidente = "00004";

            /// <summary>
            /// Notificacion Tarea Responsables
            /// </summary>
            public const string PrimeraNotificacionHorasTrabajadas = "00005";

            /// <summary>
            /// Notificacion Tarea Personas a Notificar
            /// </summary>
            public const string SegundaNotificacionHorasTrabajadas = "00006";
        }

        /// <summary>
        /// Variables de para Lesion con tiempo perdido
        /// </summary>
        public sealed class CodigoLesionTiempoPerdido
        {
            /// <summary>
            /// Lesion Tiempo Perdido Parcial Temporal
            /// </summary>
            public const string ParcialTemporal = "PARTEM";
            /// <summary>
            /// Lesion Tiempo Perdido Total Temporal
            /// </summary>
            public const string TotalTemporal = "TOTTEM";
            /// <summary>
            /// Lesion Tiempo Perdido Parcial Permanente
            /// </summary>
            public const string ParcialPermanente = "PARPER";
            /// <summary>
            /// Lesion Tiempo Perdido Total Permanente
            /// </summary>
            public const string TotalPermanente = "TOTPER";
        }

        /// <summary>
        /// Variables de para el código categoria abreviado
        /// </summary>
        public sealed class CodigoCategoriaAbreviado
        {
            /// <summary>
            /// Categoria Lesión
            /// </summary>
            public const string CategoriaLesion = "CAT001";
            /// <summary>
            /// Categoria Impacto Ambiental 
            /// </summary>
            public const string CategoriaImpactoAmbiental = "CAT002";
            /// <summary>
            /// Categoria Impacto Comunidad
            /// </summary>
            public const string CategoriaImpactoComunidad = "CAT003";
            /// <summary>
            /// Categoria Danio Propiedad
            /// </summary>
            public const string CategoriaDanioPropiedad = "CAT004";
            /// <summary>
            /// Categoria Perdida Proceso
            /// </summary>
            public const string CategoriaPerdidaProceso = "CAT005";
            /// <summary>
            /// Categoria Cuasi Incidente
            /// </summary>
            public const string CategoriaCuasiIncidente = "CAT006";
            /// <summary>
            /// Categoria Otros
            /// </summary>
            public const string CategoriaOtros = "CAT007";
        }

        /// <summary>
        /// Variables de para el tipo de código 
        /// de Categoria
        /// </summary>
        public sealed class CodigoTipoCategoria
        {
            /// <summary>
            /// Categoria de tipo CAUSA
            /// </summary>
            public const string Causa = "CAUSA";
        }


        /// <summary>
        /// Codigo de otros para las diferentes categorias de investigacion
        /// </summary>
        public sealed class CodigoOtrosCategoriaInvestigacion
        {
            /// <summary>
            /// Categoria Otros de Pérdida Proceso
            /// </summary>
            public const string OtrosTipoImpactoComunidad = "TI016";
            /// <summary>
            /// Categoria Otros de Pérdida Proceso
            /// </summary>
            public const string OtrosPerdidaProceso = "TP014";
            /// <summary>
            /// Categoria Otros de Impacto MedioAmbiental
            /// </summary>
            public const string OtrosCuerpoReceptorAfectado = "IMP09";
            /// <summary>
            /// Categoria Otros de Agente Contaminante
            /// </summary>
            public const string OtrosAgenteContaminante = "AC014";
            /// <summary>
            /// Categoria Otros de Estado de Agente Contaminante
            /// </summary>
            public const string OtrosEstadoAgenteContaminante = "EA006";
        }


        /// <summary>
        /// Codigo de cuerpo receptor afectado de Impacto MedioAmbiental
        /// </summary>
        public sealed class CodigoCuerpoReceptorAfectado
        {
            /// <summary>
            /// Codigo de cuerpo receptor agua
            /// </summary>
            public const string CodigoAgua = "AGUA";
            /// <summary>
            /// Codigo de cuerpo receptor aire
            /// </summary>
            public const string CodigoAire = "AIRE";
            /// <summary>
            /// Codigo de cuerpo receptor suelo
            /// </summary>
            public const string CodigoSuelo = "SUELO";
            /// <summary>
            /// Codigo de cuerpo receptor fauna
            /// </summary>
            public const string CodigoFauna = "FAUNA";
            /// <summary>
            /// Codigo de cuerpo receptor T Soil
            /// </summary>
            public const string CodigoTSoil = "TSOIL";
            /// <summary>
            /// Codigo de cuerpo receptor Otros
            /// </summary>
            public const string CodigoOtros = "OTROS";
        }

        /// <summary>
        /// Variables del tipo de Costo de incidencia abreviado
        /// </summary>
        public sealed class CodigoTipoInvestigacionCostoAbreviado
        {
            /// <summary>
            /// Costos de Investigación
            /// </summary>
            public const string CostoInvestigacion = "COI";
            /// <summary>
            /// Costos por Personal
            /// </summary>
            public const string CostoPersonal = "COP";
            /// <summary>
            /// Costos por Impacto Medioambiental
            /// </summary>
            public const string CostoMedioambiental = "CIM";
            /// <summary>
            /// Costos por Impacto a la Comunidad
            /// </summary>
            public const string CostoImpactoComunidad = "CIC";
            /// <summary>
            /// Costos por Daño a la Propiedad
            /// </summary>
            public const string CostoDaniosPropiedad = "CDP";
            /// <summary>
            /// Costos por Perdida de proceso
            /// </summary>
            public const string CostoPerdidaProceso = "CPP";
            /// <summary>
            /// Costos de prevención
            /// </summary>
            public const string CostoPrevencion = "CPV";
            /// <summary>
            /// Otros costos
            /// </summary>
            public const string CostoOtros = "COT";
        }


        /// <summary>
        /// Variables del tipo de Costo de incidencia Detalle abreviado
        /// </summary>
        public sealed class CodigoTipoInvestigacionCostoDetalleAbreviado
        {
            /// <summary>
            /// Costos por trabajadores involucrados (CostoInvestigacion)
            /// </summary>
            public const string CostoInvestigacionTrabajadorInvolucrado = "COI01";
            /// <summary>
            /// Costos por supervisores (CostoInvestigacion)
            /// </summary>
            public const string CostoInvestigacionSupervisor = "COI02";
            /// <summary>
            /// Costos por declaraciones de Testigos (CostoInvestigacion)
            /// </summary>
            public const string CostoInvestigacionDeclaracionTestigo = "COI03";
            /// <summary>
            /// Otros (CostoInvestigacion)
            /// </summary>
            public const string CostoInvestigacionOtros = "COI04";



            /// <summary>
            /// Horas perdidas por los trabajadores involucrados (el día del incidente) (CostoPersonal)
            /// </summary>
            public const string CostoPersonalTrabajadorInvolucrado = "COP01";
            /// <summary>
            /// Horas perdidas por los supervisores (el día del incidente) (CostoPersonal)
            /// </summary>
            public const string CostoPersonalSupervisor = "COP02";
            /// <summary>
            /// Otros (CostoPersonal)
            /// </summary>
            public const string CostoPersonalOtros = "COP03";


            /// <summary>
            /// Personal utilizado (limpieza,remediación, etc.) (CostoMedioambiental)
            /// </summary>
            public const string CostoMedioambientalPersonalUtilizado = "CIM01";
            /// <summary>
            /// Materiales utilizados (kit antiderrames, etc.) (CostoMedioambiental)
            /// </summary>
            public const string CostoMedioambientalMaterialUtilizado = "CIM02";
            /// <summary>
            /// Disposición (residuos generados, etc.) (CostoMedioambiental)
            /// </summary>
            public const string CostoMedioambientalDisposicionCosto = "CIM03";
            /// <summary>
            /// Recuperación (suelo, agua, etc.) (CostoMedioambiental)
            /// </summary>
            public const string CostoMedioambientalRecuperacionCosto = "CIM04";
            /// <summary>
            /// Otros (CostoMedioambiental)
            /// </summary>
            public const string CostoMedioambientalOtros = "CIM05";


            /// <summary>
            /// Personal utilizado (reparación, etc.) (CostoDaniosPropiedad)
            /// </summary>
            public const string CostoDaniosPropiedadPersonalUtilizado = "CDP01";
            /// <summary>
            /// Equipos utilizados (Equipos de recaste, etc.) (CostoDaniosPropiedad)
            /// </summary>
            public const string CostoDaniosPropiedadEquipoUtilizado = "CDP02";
            /// <summary>
            /// Materiales y repuestos utilizados (Materiales para rescate, etc.) (CostoDaniosPropiedad)
            /// </summary>
            public const string CostoDaniosPropiedadMaterialUtilizado = "CDP03";
            /// <summary>
            /// Costo de alquiler por reemplazo (CostoDaniosPropiedad)
            /// </summary>
            public const string CostoDaniosPropiedadCostoAlquiler = "CDP04";
            /// <summary>
            /// Costo por servicio externo (CostoDaniosPropiedad)
            /// </summary>
            public const string CostoDaniosPropiedadCostoServicioExterno = "CDP05";
            /// <summary>
            /// Otros (CostoDaniosPropiedad)
            /// </summary>
            public const string CostoDaniosPropiedadOtros = "CDP06";


            /// <summary>
            /// Personal utilizado (reparación, etc.) (CostoPerdidaProceso)
            /// </summary>
            public const string CostoPerdidaProcesoCostoProducto = "CPP01";
            /// <summary>
            /// Equipos utilizados (Equipos de recaste, etc.) (CostoPerdidaProceso)
            /// </summary>
            public const string CostoPerdidaProcesoCostoServicio = "CPP02";
            /// <summary>
            /// Materiales y repuestos utilizados (Materiales para rescate, etc.) (CostoPerdidaProceso)
            /// </summary>
            public const string CostoPerdidaProcesoCostoOcasionadoEquipo = "CPP03";
            /// <summary>
            /// Costo de alquiler por reemplazo (CostoPerdidaProceso)
            /// </summary>
            public const string CostoPerdidaProcesoCostoOcasionadoPersonal = "CPP04";
            /// <summary>
            /// Costo por servicio externo (CostoPerdidaProceso)
            /// </summary>
            public const string CostoPerdidaProcesoIncrementoSubContratacionCosto = "CPP05";
            /// <summary>
            /// Otros (CostoPerdidaProceso)
            /// </summary>
            public const string CostoPerdidaProcesoOtros = "CPP06";


            /// <summary>
            /// Costos de las medidas adoptadas para evitar la repetición del incidente (CostoPrevencion)
            /// </summary>
            public const string CostoPrevencionMedidasCosto = "CPV01";
            /// <summary>
            /// Otros (Ejemplo: costo por difusión de incidente) (CostoPrevencion)
            /// </summary>
            public const string CostoPrevencionOtros = "CPV02";

        }

        /// <summary>
        /// Codigo de cuerpo receptor afectado de Impacto MedioAmbiental
        /// </summary>
        public sealed class CodigoInvestigacionTipoAnexo
        {
            /// <summary>
            /// Codigo de cuerpo receptor agua
            /// </summary>
            public const int CodigoSnapChart = 1;
            /// <summary>
            /// Codigo de cuerpo receptor aire
            /// </summary>
            public const int CodigoAnuncioIncidente = 3;
            /// <summary>
            /// Codigo de cuerpo receptor suelo
            /// </summary>
            public const int CodigoPresentacionTabRoot = 2;
            /// <summary>
            /// Codigo de cuerpo receptor fauna
            /// </summary>
            public const int CodigoDeclaracionTetigo = 4;
            /// <summary>
            /// Codigo de cuerpo receptor T Soil
            /// </summary>
            public const int CodigoBocetoMapa = 5;
            /// <summary>
            /// Codigo de cuerpo receptor Otros
            /// </summary>
            public const int CodigoRegistroEntrenamiento = 6;
            /// <summary>
            /// Codigo de cuerpo receptor agua
            /// </summary>
            public const int CodigoPruebaAlcoholemia = 7;
            /// <summary>
            /// Codigo de cuerpo receptor aire
            /// </summary>
            public const int CodigoPruebaDroga = 8;
            /// <summary>
            /// Codigo de cuerpo receptor suelo
            /// </summary>
            public const int CodigoCopiaActaReunionExtraordinaria = 9;
            /// <summary>
            /// Codigo de cuerpo receptor fauna
            /// </summary>
            public const int CodigoInformePeritaje = 10;
            /// <summary>
            /// Codigo de cuerpo receptor T Soil
            /// </summary>
            public const int CodigoPermisoTrabajo = 11;
            /// <summary>
            /// Codigo de cuerpo receptor Otros
            /// </summary>
            public const int CodigoMatricesRiesgo = 12;
            /// <summary>
            /// Codigo de cuerpo receptor Otros
            /// </summary>
            public const int CodigoHerramientaGestionRiesgo = 13;

            /// <summary>
            /// Codigo de cuerpo receptor agua
            /// </summary>
            public const int CodigoRegistroReunionInvestigador = 14;
            /// <summary>
            /// Codigo de cuerpo receptor aire
            /// </summary>
            public const int CodigoListaEstandaresProcedimientos = 15;
            /// <summary>
            /// Codigo de cuerpo receptor suelo
            /// </summary>
            public const int CodigoRegistroDifusionIncidente = 16;
            /// <summary>
            /// Codigo de cuerpo receptor fauna
            /// </summary>
            public const int CodigoOtros = 17;
            /// <summary>
            /// Codigo de cuerpo receptor T Soil
            /// </summary>
            public const int CodigoCertificadoAutopsia = 18;
            /// <summary>
            /// Codigo de cuerpo receptor Otros
            /// </summary>
            public const int CodigoCertificadoDefunsion = 19;
            /// <summary>
            /// Codigo de cuerpo receptor Otros
            /// </summary>
            public const int CodigoCopiaLevantamientoCadaver = 20;
            /// <summary>
            /// Codigo de cuerpo receptor agua
            /// </summary>
            public const int CodigoActoInspeccionIncidenteFatal = 21;
            /// <summary>
            /// Codigo de cuerpo receptor aire
            /// </summary>
            public const int CodigoInformeMedico = 22;
            /// <summary>
            /// Codigo de cuerpo receptor suelo
            /// </summary>
            public const int CodigoCertificadoDescansoMedico = 23;
            /// <summary>
            /// Codigo de cuerpo receptor fauna
            /// </summary>
            public const int CodigoLicenciaInterna = 24;
            /// <summary>
            /// Codigo de cuerpo receptor T Soil
            /// </summary>
            public const int CodigoLicenciaConducir = 25;
            /// <summary>
            /// Codigo de cuerpo receptor Otros
            /// </summary>
            public const int CodigoFoto = 34;
        }


        /// <summary>
        /// Nivel de Responsable
        /// </summary>
        public sealed class NivelResponsable
        {
            /// <summary>
            /// Nivel proyecto
            /// </summary>
            public const string NivelProyecto = "00001";
            /// <summary>
            /// Nivel departamento
            /// </summary>
            public const string NivelDepartamento = "00002";
            /// <summary>
            /// Nivel area
            /// </summary>
            public const string NivelArea = "00003";
            /// <summary>
            /// Nivel guardia
            /// </summary>
            public const string NivelGuardia = "00004";
            /// <summary>
            /// Nivel total
            /// </summary>
            public const string NivelTotal = "00005";
        }

        /// <summary>	2898.	        /// <summary>
        /// Valores de la tabla MNT.MODULO_HERRAMIENTA		
        /// </summary>		
        public sealed class ModuloHerramienta
        {
            /// <summary>		
            /// Modulo Horas Hombre Trabajadas		
            /// </summary>		
            public const string HorasHombreTrabajadas = "00001";
            /// <summary>		
            /// Modulo Gestion esiones		
            /// </summary>		
            public const string GestionLesiones = "00002";
            /// <summary>		
            /// Modulo Gestion de Actua Positivo		
            /// </summary>		
            public const string GestionActuaPositivo = "00003";
            /// <summary>		
            /// Modulo Gestion de Actua Positivo		
            /// </summary>		
            public const string GestionVisitaGerencial = "00004";
        }

        /// <summary>
        /// Constantes que representan el Tipo de Record
        /// </summary>
        public sealed class TipoRecord
        {
            /// <summary>
            /// Tipo de Record Incidente
            /// </summary>
            public static readonly string Incidente = "009";
            /// <summary>
            /// Tipo de Record Inspecciones
            /// </summary>
            public static readonly string Inspecciones = "010";
            /// <summary>
            /// Tipo de Record Reportes de Riesgo
            /// </summary>
            public static readonly string ReportesDeRiesgo = "015";
        }

        /// <summary>
        /// Constantes que representan el Tipo de Empresa
        /// </summary>
        public sealed class TipoEmpresa
        {
            /// <summary>
            /// Tipo de Empresa del Grupo
            /// </summary>
            public static readonly string TipoEmpresaGrupo = "01";

            /// <summary>
            /// Tipo de Empresa Subcontratista
            /// </summary>
            public static readonly string TipoEmpresaSubcontratista = "02";
        }

        /// <summary>
        /// Constantes que representan el Indicador si Sufrió Lesión
        /// </summary>
        public sealed class IndicadorSufrioLesion
        {
            /// <summary>
            /// Indicador Sí Sufrió Lesión
            /// </summary>
            public static readonly string SiSufrioLesion = "01";

            /// <summary>
            /// Indicador No Sufrió Lesión
            /// </summary>
            public static readonly string NoSufrioLesion = "02";
        }

        /// <summary>
        /// Variables de para el tipo de plantilla de correo
        /// </summary>
        public sealed class IndicadorObligatorio
        {
            /// <summary>
            /// Reporte responsable pendientes
            /// </summary>
            public const bool Afirmativo = true;
            /// <summary>
            /// Reporte responsable vencidas
            /// </summary>
            public const bool Negativo = false;
        }

        /// <summary>
        /// Variables de para el tipo de plantilla de correo
        /// </summary>
        public sealed class CodigoEstadoAnexo
        {
            /// <summary>
            /// Reporte responsable pendientes
            /// </summary>
            public const string Obligatorio = "01";
            /// <summary>
            /// Reporte responsable vencidas
            /// </summary>
            public const string Opcional = "02";

            /// <summary>
            /// Reporte responsable vencidas
            /// </summary>
            public const string Depende = "03";

            /// <summary>
            /// Reporte responsable vencidas
            /// </summary>
            public const string Pasivo = null;
        }

        /// <summary>
        /// Variables de para el tipo
        public sealed class CodigoEvaluacion
        {
            /// <summary>
            /// Reporte responsable pendientes
            /// </summary>
            public const string Si = "01";
            /// <summary>
            /// Reporte responsable vencidas
            /// </summary>
            public const string No = "02";
            /// <summary>
            /// Reporte responsable vencidas
            /// </summary>
            public const string Nulo = null;
        }
        /// <summary>
        /// Variables de para el tipo de Actua Positivo
        /// </summary>
        public sealed class IndicadorActuaPositivo
        {
            /// <summary>
            /// Reporte responsable pendientes
            /// </summary>
            public const string LadoA = "LADOA";
            /// <summary>
            /// Reporte responsable vencidas
            /// </summary>
            public const string LadoB = "LADOB";
        }

        /// <summary>
        /// Valores para las Grids de Atencion Medica
        /// </summary>
        public sealed class ValoresGridsAtencionMedica
        {
            /// <summary>
            /// Tab Trabajo Restringido
            /// </summary>
            public const string TrabajoRestringido = "0001";
            /// <summary>
            /// Tab Lesion tiempo Perdido
            /// </summary>
            public const string LesionTiempoPerdido1 = "0002";
            /// <summary>
            /// Tab Lesion tiempo Perdido
            /// </summary>
            public const string LesionTiempoPerdido2 = "0003";
            /// <summary>
            /// Tab Fatalidad
            /// </summary>
            public const string Fatalidad = "0004";
        }


        /// <summary>
        /// Valores de los estados del expediente medico
        /// </summary>
        public sealed class EstadosDelExpedienteMedico
        {
            /// <summary>
            /// Estado Abierto
            /// </summary>
            public const string Abierto = "ABI";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "CER";
            /// <summary>
            /// Estado Reabierto
            /// </summary>
            public const string Reabierto = "REA";
        }


        /// <summary>
        /// Valores para la Generación del 
        /// Expediente Médico
        /// </summary>
        public sealed class GeneracionNumeroExpedienteMedico
        {
            /// <summary>
            /// Primer Expediente Médico
            /// </summary>
            public const string PrimerExpediente = "EXP-000001";
            /// <summary>
            /// Abreviatura del Expediente Médico
            /// </summary>
            public const string AbreviaturaExpedienteMedico = "EXP-";
            /// <summary>
            /// Cantidad de digitos para la generación
            /// del Expediente Médico
            /// </summary>
            public const string CantidadDigitosExpedienteMedico = "{0:000000}";
        }


        /// <summary>
        /// Valores para la Generación del 
        /// Factor Causal
        /// </summary>
        public sealed class GeneracionFactorCausal
        {
            /// <summary>
            /// Primer Registro
            /// </summary>
            public const string PrimerRegistro = "FC01";
            /// <summary>
            /// Abreviatura Factor Causal
            /// </summary>
            public const string AbreviaturaFactorCausal = "FC";
        }

        /// <summary>
        /// Valores para la Generación de 
        /// Causa Raiz
        /// </summary>
        public sealed class GeneracionCausaRaiz
        {
            /// <summary>
            /// Primer Registro
            /// </summary>
            public const string PrimerRegistro = "CR01";
            /// <summary>
            /// Abreviatura Factor Causal
            /// </summary>
            public const string AbreviaturaCausaRaiz = "CR";
        }

        /// <summary>
        /// Valores de los estados de la atencion medica
        /// </summary>
        public sealed class EstadosDeAtencionMedica
        {
            /// <summary>
            /// Estado Abierto
            /// </summary>
            public const string Abierto = "ABI";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "CER";
        }


        /// <summary>
        /// Valores de los tipos de colaboradores 
        /// Observacion Planeada
        /// </summary>
        public sealed class TipoColaboradorObservacionPlaneada
        {
            /// <summary>
            /// Trabajador
            /// </summary>
            public const string Trabajador = "00001";
            /// <summary>
            /// Supervisor
            /// </summary>
            public const string Supervisor = "00002";
            /// <summary>
            /// Observador Interno
            /// </summary>
            public const string ObservadorInterno = "00003";
        }

        /// <summary>
        /// Valores de los tipos de Testigos 
        /// Investigacion
        /// </summary>
        public sealed class TipoTestigosInvestigacion
        {
            /// <summary>
            /// Testigo Interno
            /// </summary>
            public const string TestigoInterno = "00001";
            /// <summary>
            /// Testigo Externo
            /// </summary>
            public const string TestigoExterno = "00002";
        }


        /// <summary>
        /// Valores de los tipos de acciones y oportunidades  
        /// Observacion Planeada
        /// </summary>
        public sealed class TipoOportunidadAccionObservacionPlaneada
        {
            /// <summary>
            /// Accion Inmediata
            /// </summary>
            public const string AccionInmediata = "00001";
            /// <summary>
            /// Oportunidad Mejora
            /// </summary>
            public const string OportunidadMejora = "00002";
            /// <summary>
            /// Pasos del Procedimiento
            /// </summary>
            public const string PasosProcedimiento = "00003";
        }


        /// <summary>
        /// Valores de los estados de la 
        /// Observacion Planeada
        /// </summary>
        public sealed class EstadosDeObservacionPlaneada
        {
            /// <summary>
            /// Estado Abierto
            /// </summary>
            public const string Abierto = "ABI";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "CER";
            /// <summary>
            /// Estado Anulado
            /// </summary>
            public const string Anulado = "ANU";
            /// <summary>
            /// Estado Cerrado por Gerencia
            /// </summary>
            public const string CerradoPorGerencia = "CERGE";
            /// <summary>
            /// Estado Anulado por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "ANUGE";
            /// <summary>
            /// Reabierto
            /// </summary>
            public const string Reabierto = "REAB";
        }

        /// <summary>
        /// Valores de Empleador y SubContratistas
        /// Inspecciones
        /// </summary>
        public sealed class ValoresEmpleadorSubContratista
        {
            /// <summary>
            /// Empleador
            /// </summary>
            public const string Empleador = "EMP";
            /// <summary>
            /// SubContratista
            /// </summary>
            public const string SubContratista = "SUB";
        }

        /// <summary>
        /// Valor para el Check Otros
        /// </summary>
        public sealed class ValorOtrosInspeccionCheck
        {
            public const string ValorOtros = "00007";
        }

        /// <summary>
        /// Valor para el Check Otros Reporte de Riesgos
        /// </summary>
        public sealed class ValorOtrosReporteRiesgosCheck
        {
            public const string ValorOtros = "OTR";
        }

        public sealed class ValoresTipoObservador
        {
            /// <summary>
            /// Empleador
            /// </summary>
            public const string Lider = "LID";
            /// <summary>
            /// SubContratista
            /// </summary>
            public const string Ejecutor = "EJE";
        }

        public sealed class ValoresTipoInspector
        {
            /// <summary>
            /// Empleador
            /// </summary>
            public const string Interno = "INT";
            /// <summary>
            /// SubContratista
            /// </summary>
            public const string Externo = "EXT";
        }

        public sealed class ValoresTipoReportante
        {
            /// <summary>
            /// Reportante Interno
            /// </summary>
            public const string Interno = "INT";
            /// <summary>
            /// Reportante Externo
            /// </summary>
            public const string Externo = "EXT";
            /// <summary>
            /// Empresa Reportada
            /// </summary>
            public const string EmpresaReportada = "ERE";
        }
        /// <summary>
        /// Valores de los estados de la 
        /// inspección
        /// </summary>
        public sealed class EstadosDeInspeccion
        {
            /// <summary>
            /// Estado Abierto
            /// </summary>
            public const string Abierto = "ABI";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "CER";
            /// <summary>
            /// Estado Anulado
            /// </summary>
            public const string Anulado = "ANU";
            /// <summary>
            /// Estado Cerrado por Gerencia
            /// </summary>
            public const string CerradoPorGerencia = "CERGE";
            /// <summary>
            /// Estado Anulado por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "ANUGE";
            /// <summary>
            /// Reabierto
            /// </summary>
            public const string Reabierto = "REAB";
        }

        public sealed class EstadosDeReporteRiesgos
        {
            /// <summary>
            /// Estado Abierto
            /// </summary>
            public const string Abierto = "ABI";
            /// <summary>
            /// Estado Cerrado
            /// </summary>
            public const string Cerrado = "CER";
            /// <summary>
            /// Estado Anulado
            /// </summary>
            public const string Anulado = "ANU";
            /// <summary>
            /// Estado Cerrado por Gerencia
            /// </summary>
            public const string CerradoPorGerencia = "CERGE";
            /// <summary>
            /// Estado Anulado por Gerencia
            /// </summary>
            public const string AnuladoPorGerencia = "ANUGE";
            /// <summary>
            /// Reabierto
            /// </summary>
            public const string Reabierto = "REAB";
        }

        /// <summary>
        /// Valores del Proceso de Anuncio
        /// </summary>
        public sealed class ProcesoAnuncio
        {
            /// <summary>
            /// Anuncio En Fecha
            /// </summary>
            public const string EnFecha = "EF";
            /// <summary>
            /// Anuncio Fuera de Fecha
            /// </summary>
            public const string FueraFecha = "FF";
        }

        /// <summary>
        /// Valores de Etapas del Incidente
        /// </summary>
        public sealed class EtapaIncidente
        {
            /// <summary>
            /// Etapa de Anuncio
            /// </summary>
            public const string Anuncio = "ANU";
            /// <summary>
            /// Etapa de Investigación
            /// </summary>
            public const string Investigacion = "INV";
        }

        /// <summary>
        /// Valores de los Procesos de la Investigación
        /// </summary>
        public sealed class ProcesoInvestigacion
        {
            /// <summary>
            /// Investigación En Fecha
            /// </summary>
            public const string EnFecha = "EF";
            /// <summary>
            /// Investigación En Proceso
            /// </summary>
            public const string EnProceso = "EP";
            /// <summary>
            /// Investigación Fuera de Fecha
            /// </summary>
            public const string FueraFecha = "FF";
        }

        /// <summary>
        /// Modos de carga para visualización de pantalla
        /// </summary>
        public sealed class ModoCargaPantalla
        {
            /// <summary>
            /// Modal
            /// </summary>
            public const string Modal = "MODAL";
            /// <summary>
            /// Bandeja
            /// </summary>
            public const string Bandeja = "BANDEJA";
            /// <summary>
            /// Ver Todo
            /// </summary>
            public const string VerTodo = "ALL";
        }
    }
}
