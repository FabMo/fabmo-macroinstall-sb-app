// Load Single Macro File
function InstallMacro (numMacro,type_mac,name,description) {
  var sbp_macro = "";
  var source_folder = type_mac + "/macro_";
  var source_data = source_folder + numMacro + ".sbp";
  jQuery.get(source_data, function(data) {
      sbp_macro += data;
    })
    .done(function() {
      source_data = source_data.replace(source_folder, '');
      source_data = source_data.replace('.sbp', '');
      var macro = {};
      macro.id = source_data;
      macro.name = name;
      macro.description = description;
      macro.content = sbp_macro;

    console.log("id: ", macro.id );
    console.log("name: ", macro.name );
//    console.log("description: ", macro.description );
//    console.log("id: ", macro.content );

      // create the macro with id macro.id
 	  fabmo.updateMacro(macro.id,{},function(err, result) {
 	  // sett the macro fields (name, description,content);
 	    fabmo.updateMacro(macro.id,{name:macro.name,content:macro.content,description:macro.description}, function(err, result) {
          fabmo.notify('info', "Macro '" + macro.id + "' saved.");
        });
      });
  });
}
// // Install ALL Desktop/Full Size
$("#install-macroALL").click(function(evt) {
    InstallMacro(2, "macros_specific","Z-Zero","Defines offset for Z-Zero location for #3, and sets Axis Zero for Z (use after changing cutter");
    InstallMacro(3, "macros_specific","Set XYZ Zero Locations","Automatically Set Axis Zero for XYZ");
    InstallMacro(6, "macros","Start Spindle","Start the spindle and pause for spin up");
    InstallMacro(7, "macros","Stop Spindle","Stop the spindle");
    InstallMacro(9, "macros","Tool Change","Use ATC or manual tool change");
    InstallMacro(78, "macros","Manually Set Z-Zero","Set Zeroing from Prox for Z based on Current Location for use with Macro#3");
    InstallMacro(79, "macros","Park","Move to Park Location");
    InstallMacro(90, "macros","MY_Variables","Load variables (with variable information)");
    InstallMacro(91, "macros","Change Unit type","Change Units");
});

// Install Individually
$("#install-macro2").click(function(evt) {
    InstallMacro(2, "macros_specific","Z-Zero","Defines offset for Z-Zero location for #3, and sets Axis Zero for Z (use after changing cutter");
});
$("#install-macro3").click(function(evt) {
    InstallMacro(3, "macros_specific","Set XYZ Zero Locations","Automatically Set Axis Zero for XYZ");
});
$("#install-macro6").click(function(evt) {
    InstallMacro(6, "macros","Start Spindle","Start the spindle and pause for spin up");
});
$("#install-macro7").click(function(evt) {
    InstallMacro(7, "macros","Stop Spindle","Stop the spindle");
});
$("#install-macro9").click(function(evt) {
    InstallMacro(9, "macros","Tool Change","Use ATC or manual tool change");
});
$("#install-macro78").click(function(evt) {
    InstallMacro(78, "macros","Manually Set Z-Zero","Set Zeroing from prox for Z based on Current Location for use with Macro#3");
});
$("#install-macro90").click(function(evt) {
    InstallMacro(90, "macros","MY_Variables","Load variables (with variable information)");
});
$("#install-macro91").click(function(evt) {
    InstallMacro(91, "macros","Change Unit type","Change Units");
});
