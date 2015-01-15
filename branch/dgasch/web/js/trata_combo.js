$( document ).ready(function() {
	
    $("#educacion").jCombo({ url: "http://localhost/index.php/datos/getEducacion" } );
    $("#origen").jCombo({ url: "http://localhost/index.php/datos/getOrig" } );
    $("#rol").jCombo({ url: "http://localhost/index.php/datos/getRol" } );
    $("#vulnerabilidad").jCombo({ url: "http://localhost/index.php/datos/getVul" } );
    $("#jurisdiccion").jCombo({ url: "http://localhost/index.php/datos/getJurisdiccion" } );
    $("#jur_depto").jCombo({ url: "http://localhost/index.php/datos/getDeptoJuz?id=",
                            parent: "#jurisdiccion"
			});		
    $("#juzgado").jCombo({ url: "http://localhost/index.php/datos/getJuz?id=",
                            parent: "#jur_depto"
			});
    });



