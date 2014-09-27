tinyMCEPopup.requireLangPack();

var Eomarvin2dstudentDialog = {
	init : function() {
		var f = document.forms[0];
		var inst = tinyMCEPopup.editor;
		var elm = inst.selection.getNode();
		// Get the selected contents as text and place it in the marvinsketch
		//f.someval.value = tinyMCEPopup.editor.selection.getContent({format : 'text'});
//		f.somearg.value = tinyMCEPopup.getWindowArg('some_custom_arg');


//		alert('Here3');
		
		elm = inst.dom.getParent(elm, "SPAN");
//		alert(elm);
		if (elm != null && elm.nodeName == "SPAN")
		action = "update";
		
		if (action == "update") {
		var s = elm.innerHTML;
//		setFormValue('href', href);
		
		s = s.substring(0, s.length - 3);

//		s = s.substring(3);
		
		
		width=s.split("{")[0];
		width=width.slice(1);
		document.getElementById('width').value=width;
//		width = width.slice(1);
		document.getElementById('heigth').value=s.split("{")[1];

		s=s.split(/{(.+)?/)[1];
		s=s.split(/{(.+)?/)[1];
		//console.log(s);

		s = s.replace(/&lt;/g,"<").replace(/&gt;/g,">");
		////  set applet structure for update
		//alert(s);
		document.MSketch.setMol(s, 'mrv');


		}
		else{
		document.MSketch.setMol('<?xml version="1.0" encoding="UTF-8"?><cml version="ChemAxon file format v6.0, generated by v6.0.0"><MDocument></MDocument></cml>', 'mrv');
		}





	},

	insert : function() {
		// Insert the contents from the input into the document
//		tinyMCEPopup.editor.execCommand('mceInsertContent', false, document.forms[0].someval.value);
		var s = document.MSketch.getMol('mrv');
//		s = s.replace(/(\r\n|\n|\r)/gm,"\n");
		s = unix2local(s); // Convert "\n" to local line separator
		s = s.replace(/</g, unescape("%26lt%3B")).replace(/>/g, unescape("%26gt%3B"))
//		document.MolForm.MolTxt.value = s;
//		var molfile = ChemDoodle.writeMOL(sketcher.getMolecule());
//		var molfile = ChemDoodle.writeRXN(sketcher.getMolecules());
                width=document.getElementById('width').value;
		heigth=document.getElementById('heigth').value;


		if(isNaN(width)==true){
		width=600;	
		}
		
		if(isNaN(heigth)==true){
		heigth=200;	
		}





		var inst = tinyMCEPopup.editor;
		var elm = inst.selection.getNode();
		elm = inst.dom.getParent(elm, "SPAN");
//		alert(elm);
		if (elm != null && elm.nodeName == "SPAN"){
		var action = "update";
		}
		else{
		var action = "new";
		}

		if (action == "update") {
		elm.innerHTML = '['+width+'{'+heigth+'{' +s+ '}}]';


		}
		else{


		var molfile = '<div class="marvin mceNonEditable"><span class="mar2d mceNonEditable">['+width+'{'+heigth+'{' +s+ '}}]</span></marvin>';

//		alert(molfile);

		tinyMCEPopup.editor.execCommand('mceInsertContent', false, molfile);
		}
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(Eomarvin2dstudentDialog.init, Eomarvin2dstudentDialog);
