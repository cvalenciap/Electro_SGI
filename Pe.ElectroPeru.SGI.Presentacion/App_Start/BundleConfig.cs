using System.IO;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Pe.ElectroPeru.SGI.Presentacion
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //highcharts
            bundles.Add(new ScriptBundle("~/Components/highcharts/js").Include(

                        "~/Components/highcharts/js/highcharts.js"
            ));

            bundles.Add(new ScriptBundle("~/Components/highcharts/css").Include(

                        "~/Components/highcharts/css/highcharts.css"
            ));

            bundles.Add(new ScriptBundle("~/Components/JQuery").Include(
                        //"~/Components/JQuery/jQuery-2.1.4.min.js",
                        "~/Components/JQuery/jquery-3.1.1.min.js",
                        //"~/Components/JQuery/jquery-ui.js",
                        //"~/Components/JQuery/jquery-ui.min.js",
                        //"~/Components/JQuery/jquery-3.1.1.js",
                        "~/Components/JQuery/jquery-ui-1.12.1.custom.js",
                        "~/Components/JQuery/jquery.validate.js",
                        "~/Components/JQuery/jquery.validate.additional-methods.js",
                        "~/Components/JQuery/jquery.mask.js",
                        "~/Components/JQuery/jquery.canvasjs.min.js",//
                        "~/Components/JQuery/Chart.js",//
                        "~/Components/JQuery/jquery.formatCurrency-1.4.0.min.js",
                        "~/Components/JQuery/jquery.formatCurrency-1.4.0.js",
                        "~/Components/JQuery/jquery.tokeninput.js",
                        "~/Components/JQuery/jshashset-3.0.js",
                        "~/Components/JQuery/jshashtable-3.0.js",
                        "~/Components/JQuery/jquery.numberformatter-1.2.4.js"
            ));

            // bootstrap
            bundles.Add(new ScriptBundle("~/Components/Bootstrap/js").Include(
                "~/Components/Bootstrap/js/bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/Components/Bootstrap/css").Include(
                "~/Components/Bootstrap/css/bootstrap.min.css",
                "~/Components/Bootstrap/js/bootstrap-theme.min.css"));

            //// plugins | jquery
            //bundles.Add(new ScriptBundle("~/Components/JQuery/js").Include(
            //                             "~/Components/JQuery/js/jQuery-2.1.4.min.js"));

            // plugins | datepicker
            bundles.Add(new ScriptBundle("~/Components/datepicker/js").Include(
                                         "~/Components/datepicker/js/bootstrap-datepicker.js"//,
                                         //"~/Components/datepicker/js/locales/bootstrap-datepicker*"
                                         ));

            bundles.Add(new StyleBundle("~/Components/datepicker/css").Include(
                                        "~/Components/datepicker/css/datepicker3.css"));

            bundles.Add(new ScriptBundle("~/Components/DataTables").Include(
                        "~/Components/DataTables/js/jquery.dataTables.js",
                        "~/Components/DataTables/js/dataTables.responsive.js"
                        , "~/Components/DataTables/js/dataTables.bootstrap.js"
            ));

            bundles.Add(new ScriptBundle("~/Components/Codemaleon").Include(
                        "~/Components/Codemaleon/ns.js"
            ));

            bundles.Add(new StyleBundle("~/Components/TinyMCE").Include(
            "~/Components/TinyMCE/tiny_mce.js",
            "~/Components/TinyMCE/tiny_mce_popup.js",
            "~/Components/TinyMCE/tiny_mce_src.js"
            ));

            bundles.Add(new StyleBundle("~/Components/SumoSelect").Include(
            "~/Components/SumoSelect/jquery.sumoselect.js",
            "~/Components/SumoSelect/jquery.sumoselect.min.js"
            ));

            bundles.Add(new StyleBundle("~/Components/ckeditor").Include(
            "~/Components/ckeditor/ckeditor.js",
            "~/Components/ckeditor/adapters/jquery.js"
            ));

            bundles.Add(new ScriptBundle("~/Components/GmdUtil").Include(
                "~/Scripts/Base/Layout/Util.js"
            ));

            bundles.Add(new ScriptBundle("~/Components/Gmd").Include(                      
                      "~/Components/Gmd/Dialog/Dialog.js",
                      "~/Components/Gmd/FragmentView/FragmentView.js",
                        "~/Components/Gmd/Message/Message.js",
                        "~/Components/Gmd/Ajax/Ajax.js",
                        "~/Components/Gmd/ProgressBar/ProgressBar.js",
                        "~/Components/Gmd/Validator/Validator.js",
                        "~/Components/Gmd/Storage/Storage.js",
                        "~/Components/Gmd/TextBox/TextBox.js",
                        "~/Components/Gmd/Calendar/Calendar.js",
                        "~/Components/Gmd/Grid/Grid.js",
                        "~/Components/Gmd/TokenInput/TokenField.js",
                        "~/Components/Gmd/TinyMCE/TinyMCE.js",
                        "~/Components/Gmd/TabControl/TabControl.js",
                        "~/Components/Gmd/Calendar/Calendar.js",
                        "~/Components/Gmd/Autocomplete/Autocomplete.js",
                        "~/Components/Gmd/SumoSelect/SumoSelect.js",
                        "~/Components/Gmd/Upload/Upload.js",
                        "~/Components/Gmd/AjaxUpload/AjaxUpload.js",
                        "~/Components/Gmd/AjaxUpload/jquery.ajax_upload.js"
            ));

            bundles.Add(new ScriptBundle("~/FrameworkStyle/js").Include(
                        "~/Components/Bootstrap/js/bootstrap.js",
                        "~/Components/Bootstrap/js/bootstrap-dialog.js",
                        "~/Components/Bootstrap/js/bootstrap-confirmation.min.js"
            ));

            bundles.Add(new StyleBundle("~/Components/GmdCss").Include(
                        "~/Components/Gmd/ProgressBar/ProgressBar.css",
                        "~/Components/Gmd/Dialog/Dialog.css",
                        "~/Components/Gmd/Message/Message.css"
            ));

            bundles.Add(new StyleBundle("~/Components/SelectCustomCss").Include(
                        "~/Components/SelectCustom/css/bootstrap-select.min.css"
            ));

            bundles.Add(new ScriptBundle("~/Components/SelectCustomJs").Include(
                        "~/Components/SelectCustom/js/bootstrap-select.js"
            ));

            bundles.Add(new StyleBundle("~/Components/FancyBoxCss").Include(
                        "~/Components/FancyBox/css/jquery.fancybox.css"
            ));

            bundles.Add(new ScriptBundle("~/Components/FancyBoxJs").Include(
                        "~/Components/FancyBox/js/jquery.fancybox.pack.js"
            ));


            bundles.Add(new StyleBundle("~/Components/JQueryCss").Include(
            "~/Components/JQuery/jquery-ui-1.10.0.custom.css",
            "~/Components/JQuery/TokenInput-facebook.css",
            "~/Components/JQuery/TokenInput.css",
            "~/Components/JQuery/sumoselect.css"
            ));

            bundles.Add(new ScriptBundle("~/Components/DataTablesCss").Include(
                        "~/Components/DataTables/css/jquery.dataTables.css"
                        , "~/Components/DataTables/css/dataTables.bootstrap.css"
                        , "~/Components/DataTables/css/dataTables.responsive.css"
            ));

            bundles.Add(new StyleBundle("~/Template/css").Include(
                        "~/Theme/app/main.css",
                        "~/Theme/app/box.css",
                        "~/Theme/app/layout.css",
                        "~/Theme/app/form.css",
                        "~/Theme/app/table.css",
                        "~/Theme/app/comp.css",
                        "~/Theme/app/nav.css",
                        "~/Theme/app/uiExt.css",
                        "~/Theme/app/utilities.css",
                        "~/Theme/app/responsive.css",
                        "~/Theme/app/skin.css",
                        "~/Theme/app/style.css",
                        "~/Scripts/Base/owl-carousel/owl.carousel.css"

            ));


            bundles.Add(new StyleBundle("~/FrameworkStyle/css").Include(
                        "~/Components/Bootstrap/css/bootstrap.css",
                        "~/Components/font-awesome/css/font-awesome.css"
            ));

            var directoryScripts = HttpContext.Current.Server.MapPath("~/Scripts");
            GenerateDynamicScriptBundle(bundles, new DirectoryInfo(directoryScripts));

            /*Custom page css*/

            bundles.Add(new StyleBundle("~/Login/css").Include(
                        "~/Theme/Login.css"));
        }

        private static void GenerateDynamicScriptBundle(BundleCollection bundles, DirectoryInfo directory, string pathDirectories = "")
        {
            var files = directory.EnumerateFiles();
            if (files != null && files.Any())
            {
                bundles.Add(new ScriptBundle("~/Scripts/" + pathDirectories.Replace("/", "").ToLower()).Include(
                                        "~/Scripts/" + pathDirectories + "*.js"));
            }
            var directories = directory.EnumerateDirectories().ToList();
            if (directories != null && directories.Any())
            {
                directories.ForEach(d =>
                {
                    GenerateDynamicScriptBundle(bundles, d, (pathDirectories + d.Name + "/"));
                });
            }
        }
    }
}