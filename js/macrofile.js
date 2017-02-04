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

// NOTE: There are subtle difference in the naming and descriptions of the same ("specific") macro across versions
//        and different macros will be loaded

// Install ALL Desktop/Full Size
$("#install-macroALL").click(function(evt) {
    InstallMacro(3, "macros_specific","Set XY Zero Locations","Automatically Set Axis Zero for XY");
    InstallMacro(6, "macros","Start Spindle","Start the spindle and pause for spin up");
    InstallMacro(7, "macros","Stop Spindle","Stop the spindle");
    InstallMacro(9, "macros","Tool Change","Use ATC or manual tool change");
    InstallMacro(90, "macros","MY_Variables","Load variables (with variable information)");
    InstallMacro(91, "macros","Change Unit type","Change Units");
});

// Install Individually
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
$("#install-macro90").click(function(evt) {
    InstallMacro(90, "macros","MY_Variables","Load variables (with variable information)");
});
$("#install-macro91").click(function(evt) {
    InstallMacro(91, "macros","Change Unit type","Change Units");
});
