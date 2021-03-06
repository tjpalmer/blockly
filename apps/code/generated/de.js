// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">visuelle programmierumgebung</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Erzeugten JavaScript Code anzeigen.</span><span id="linkTooltip">Blöcke abspeichern und Link erzeugen.</span><span id="runTooltip">Programm ausführen.</span><span id="runProgram">Programm ausführen</span><span id="resetProgram">Zurücksetzen</span><span id="dialogOk">Okay</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logik</span><span id="catLoops">Loops</span><span id="catMath">Mathe</span><span id="catText">Text</span><span id="catLists">Listen</span><span id="catColour">Farben</span><span id="catVariables">Variablen</span><span id="catProcedures">Funktionen</span><span id="httpRequestError">Es gab ein Problem während der HTTP Anfrage.</span><span id="linkAlert">Blöcke mit diesem Link teilen:\n\n%1</span><span id="hashError">Entschuldigung, konnte die gespeicherten Blöcke für \'%1\' nicht finden.</span><span id="xmlError">Kann Sicherungsdatei nicht laden.  Diese wurde vermutlich mit einer veralteten Version von Blockly erstellt?</span><span id="listVariable">liste</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">Okay</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">Fehler beim XML parsen:\n%1\n\nÄnderungen verwerfen?</span><span id="Code_badCode">Programmfehler:\n%1</span><span id="Code_timeout">Maximum execution iterations exceeded.</span><span id="Code_discard">Alle %1 Blöcke löschen?</span></div>';
};


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<table width="100%" height="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Code</span></h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr><tr><td colspan=2><table width="100%"><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon" onclick="tabClick(this.id)">Blöcke</td><td class="tabmin">&nbsp;</td><td id="tab_javascript" class="taboff" onclick="tabClick(this.id)">JavaScript</td><td class="tabmin">&nbsp;</td><td id="tab_python" class="taboff" onclick="tabClick(this.id)">Python</td><td class="tabmin">&nbsp;</td><td id="tab_xml" class="taboff" onclick="tabClick(this.id)">XML</td><td class="tabmax"><button class="notext" title="Alle Blöcke löschen." onclick="discard(); renderContent();"><img src=\'../../media/1x1.gif\' class="trash icon21"></button> <button id="linkButton" class="notext" title="Blöcke abspeichern und Link erzeugen." onclick="BlocklyStorage.link()"><img src=\'../../media/1x1.gif\' class="link icon21"></button> <button class="notext primary" title="Programm ausführen." onclick="runJS()"><img src=\'../../media/1x1.gif\' class="run icon21"></button></td></tr></table></td></tr><tr><td height="99%" colspan=2>' + codepage.toolbox(null, null, opt_ijData) + '<iframe id="content_blocks" class="content" src="frame.html?' + soy.$$escapeHtml(opt_ijData.langSrc) + '"></iframe><pre id="content_javascript" class="content"></pre><pre id="content_python" class="content"></pre><textarea id="content_xml" class="content"></textarea></td></tr></table>' + apps.dialog(null, null, opt_ijData);
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Logik"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Mathe"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Text"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><block type="text"></block></value></block><block type="text_length"></block><block type="text_isEmpty"></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_changeCase"></block><block type="text_trim"></block><block type="text_print"></block><block type="text_prompt"></block></category><category name="Listen"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">liste</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">liste</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">liste</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">liste</title></block></value></block></category><category name="Farben"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Variablen" custom="VARIABLE"></category><category name="Funktionen" custom="PROCEDURE"></category></xml>';
};
