WebFontConfig={google:{families:['Signika+Negative:400,600:latin']}};
(function() { var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);})();

color = '#6D0012';
site = 'MonAvocatDivorce';
ext = '.com';

css = 	'<style type="text/css">';
css += 	'body {background-color:#FAFAFA;padding:0px;margin:0px;}';
css += 	'.h {width:100%;position:fixed;background-color:#000;padding-top:5px;padding-bottom:8px;background-color:'+color+';font-family:Arial;font-size:36px;color:#FFFFFF;letter-spacing:-2px;height:40px;text-align:center;}';
css += 	'.h_content {max-width:1000px;text-align:left;margin:auto;}';
css +=	'.h_logo {font-weight:700;}';
css +=	'.h_ext {font-size:60%;letter-spacing:-1px;}';
css += 	'.content {padding:30px;float:left;}';
css +=	'.i_text {float:right;width:200px;margin-left:20px;margin-top:-10px;margin-right:-10px;padding:3px;border:1px solid #CBCBCB;height:100px;}';
css += 	'h1 {font-family:Arial;font-size:40px;margin-top:0px;margin-top:0px;margin-bottom:10px;letter-spacing:-2px;font-weight:normal}';
css += 	'h2 {font-family: Arial;font-size:24px;margin-top:0px;margin-top:30px;margin-bottom:10px;color:'+color+';letter-spacing:-1px;font-weight:normal;border-bottom:1px solid #DCDCDC;line-height:40px;}';
css += 	'p {font-family: Arial;font-size:14px;line-height:22px;text-align:justify;}';
css += 	'.block {margin:10px;margin-top:70px;border:1px solid #DCDCDC;background-color:#FFFFFF;max-width:700px;text-align:left;float:left;}';
css += 	'.m {padding:0px;min-width:250px;}';
css += 	'.m_s {color:'+color+';padding:10px;border-left:5px solid '+color+';}';
css +=	'.m_link {padding:10px;font-size:12px;font-weight:bold;font-family:Arial;border-bottom:1px dotted #EDEDED;border-left:5px solid #FFFFFF;}';
css +=	'.m_link:hover {color:'+color+';cursor:pointer;border-left:5px solid '+color+';}';
css += 	'.page {margin:auto;max-width:1020px;}';
css += 	'.bt {background-color:'+color+';color:#FFFFFF;padding:10px;display:inline-block;border-radius:3px;font-size:13px;font-weight:bold;}';
css += 	'.devis {background-color:#FAFAFA;box-shadow:1px 1px 4px #666666;;margin-top:30px;text-align:center;}';
css += 	'.devis th {font-family:Arial, Helvetica, sans-serif;font-size:12px;font-weight:bold;text-align:right;}';
css += 	'.devis td {font-family:Arial, Helvetica, sans-serif;font-size:12px;text-align:left;}';
css +=	'.partenaire_i {height:25px;}';
css +=	'.partenaire {margin-left:220px;margin-top:3px;font-family:Arial;font-size:11px;font-weight:bold;color:#777777;}';
css += 	'</style>';

oui_non = '<table cellpadding="0" cellspacing="0">\
            	<tr>\
                	<td><input type="radio" name="[NAME]" id="[NAME]_oui" align="absmiddle"/></td><td><label for="[NAME]_oui">Oui</label></td>\
					<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>\
					<td><input type="radio" name="[NAME]" id="[NAME]_non" align="absmiddle"/></td><td><label for="[NAME]_non">Non</label></td>\
                </tr>\
            </table>';

devis = '<div class="AffiliateDevis"></div>';

pages = Array();

pages = {
"/" : {
	"keyword" 	: "Le divorce",
	"title" 	: "Divorce : Comment trouver son avocat pour un divorce ?",
	"text" 		: "<img src='http://img.avocat.net/IDivorce.jpg' class='i_text'/>\
		<h1>Le divorce</h1>\
		<p>Le divorce est la proc&eacute;dure qui permet de mettre fin au mariage de deux personnes.\
		Il n&eacute;cessite une proc&eacute;dure devant le juge et d'&ecirc;tre repr&eacute;sent&eacute; par un avocat le jour de l'audience.</p>\
		<h2>Types de divorce</h2>\
		<p>Le divorce peut &ecirc;tre &agrave; l'amiable si les deux &eacute;poux acceptent le principe du divorce et ses cons&eacute;quences (divorce par consentement mutuel), ou contentieux.\
		<p>Dans le cas d'un divorce contentieux, il existe plusieurs possibilit&eacute;s : le divorce accept&eacute;, le divorce pour alt&eacute;ration d&eacute;finitive du lien et le divorce pour faute.</p>\
		"+devis+"\
		<h2>Cons&eacute;quences du divorce</h2>\
		<p>Le divorce met fin au mariage et ainsi aux obligations entre les &eacute;poux.</p>\
		<p>La gestion des cons&eacute;quences financi&egrave;res (prestation compensatoire, r&eacute;partition des biens) d&eacute;pend du type de divorce.</p>\
		<p>Dans le cadre d'un divorce &agrave; l'amiable, les &eacute;poux sont d'accord sur le partage des biens et la prestation compensatoire, dans les autres cas c'est le juge qui statuera.</p>\
		<h2>Cout d'un divorce</h2>\
		<p>Le co&ucirc;t d'un divorce d&eacute;pend de diff&eacute;rents crit&egrave;res (enfants, biens immobiliers...).</p>\
		<p>Le divorce &agrave; l'amiable est moins cher car les &eacute;poux sont d'accord sur le divorce et ses cons&eacute;quences.</p>\
		<p>Le co&ucirc;t d'un divorce augmente avec l'intervention dans la proc&eacute;dure de professionnels du droit comme un notaire ou un huissier.</p>"},


"/Divorce-Par-Consentement-Mutuel.html" : {
	"keyword" 	: "Le divorce par consentement mutuel",
	"title" 	: "Divorce par consentement mutuel : Comment trouver son avocat pour un divorce par consentement mutuel ?",
	"text" 		: "	<img src='http://img.avocat.net/IDivorceParConsentementMutuel.jpg' class='i_text'/>\
		<h1>Le divorce par consentement mutuel</h1>\
		<p>Egalement appel&eacute; divorce &agrave; l'amiable, le divorce par consentement mutuel est possible lorsque les deux &eacute;poux sont d'accord pour divorcer mais &eacute;galement sur toutes les cons&eacute;quences du divorce : partage des biens, &eacute;ventuelles pensions et prestations &agrave; verser, garde des enfants...</p>\
		<h2>Avantages et inconv&eacute;nients du divorce  par consentement mutuel</h2>\
		<p>Le divorce par consentement mutuel est le moins cher et le plus rapide. Le divorce est g&eacute;n&eacute;ralement prononc&eacute; en 3 mois et pour un prix inf&eacute;rieur &agrave; 500 euros par &eacute;poux.</p>\
		<p>Son seul inconv&eacute;nient est que les &eacute;poux ont une grande responsabilit&eacute;, en effet une fois le divorce prononc&eacute;, il est difficile de modifier l'accord.</p>\
		"+devis+"\
		<h2>La proc&eacute;dure de divorce par consentement mutuel</h2>\
		<p>Les &eacute;poux s'adressent &agrave; leurs avocats respectifs ou &agrave; un m&ecirc;me avocat. L'avocat prend connaissance de la situation personnelle du couple et r&eacute;dige la convention de divorce. Il d&eacute;pose ensuite la requ&ecirc;te au tribunal de grande instance du domicile des &eacute;poux (ou du domicile de l'un ou l'autre &eacute;poux dans le cas ou les &eacute;poux ne vivent pas ensemble). Le juge aux affaires familiales convoque ensuite les &eacute;poux pour une audience ou il homologuera la convention de divorce. Le divorce sera prononc&eacute;.</p>\
		<h2>Co&ucirc;t d'un divorce par consentement mutuel</h2>\
		<p>Le prix d'un divorce par consentement mutuel varie en fonction de votre situation personnelle (enfants, lieux de r&eacute;sidence, biens immobiliers...)</p>\
		<p>Les &eacute;poux peuvent demander l'aide juridictionnelle si leurs ressources sont insuffisantes.</p>"},


"/Divorce-Amiable.html" : {
	"keyword" 	: "Le divorce &agrave; l'amiable",
	"title" 	: "Divorce a l'amiable : Comment trouver son avocat pour un divorce a l'amiable ?",
	"text" 		: "	<img src='http://img.avocat.net/IDivorceAmiable.jpg' class='i_text'/>\
		<h1>Le divorce  &agrave; l'amiable</h1>\
		<p>On opte pour un divorce &agrave; l'amiable (ou divorce par consentement mutuel) lorsque les deux &eacute;poux sont d'accord sur le divorce et ses effets (prestation compensatoire, r&eacute;partition des biens, garde des enfants...).</p>\
		<h2>R&ocirc;le du juge dans un divorce &agrave; l'amiable</h2>\
		<p>M&ecirc;me lors d'un divorce &agrave; l'amiable ou les deux &eacute;poux sont d'accords sur les &eacute;l&eacute;ments du divorce, le juge doit donner son accord sur la convention de divorce afin qu'elle respecte suffisamment les int&eacute;r&ecirc;ts de chaque &eacute;poux et des enfants. </p>\
		"+devis+"\
		<h2>Est-il obligatoire d'avoir un avocat pour divorcer &agrave; l'amiable ?</h2>\
		<p>Oui, il est obligatoire, lors d'un divorce, que les &eacute;poux soient repr&eacute;sent&eacute;s par un avocat. C'est lui qui d&eacute;pose la requ&ecirc;te de divorce au Tribunal de grande instance et qui assiste les &eacute;poux dans leurs d&eacute;marches.</p>"},

"/Divorcer.html" : {
	"keyword" 	: "Comment faire pour divorcer ?",
	"title" 	: "Divorcer : Comment faire pour divorcer ?",
	"text" 		: "	<img src='http://img.avocat.net/IDivorcer.jpg' class='i_text'/>\
		<h1>Comment faire<br />pour divorcer ?</h1>\
		<p>Pour divorcer chaque &eacute;poux doit choisir un avocat pour le repr&eacute;senter (qui peut &ecirc;tre commun en cas de divorce par consentement mutuel), ils d&eacute;terminent le type de proc&eacute;dure (&agrave; l'amiable ou contentieux) en fonction de la cause de la s&eacute;paration. L'avocat entame alors la proc&eacute;dure.</p>\
		<h2>Comment divorcer simplement et rapidement ?</h2>\
		<p>Pour une proc&eacute;dure simple, rapide et peu couteuse (3 mois &agrave; partir de 240 euros par &eacute;poux) la solution est le divorce &agrave; l'amiable, les &eacute;poux sont alors d'accord sur le principe du divorce et ses cons&eacute;quences, le juge intervient simplement pour v&eacute;rifier que les int&eacute;r&ecirc;ts de chacun des &eacute;poux et des enfants sont respect&eacute;s.</p>\
		"+devis+"\
		<h2>Divorcer avec un seul avocat, est-ce possible ?</h2>\
		<p>C'est possible ! Lors d'un divorce par consentement mutuel les deux &eacute;poux peuvent &ecirc;tre repr&eacute;sent&eacute;s par le m&ecirc;me avocat r&eacute;duisant alors les couts de la proc&eacute;dure.</p>\
		<h2>En combien de temps serai-je divorc&eacute; ?</h2>\
		<p>La dur&eacute;e du divorce d&eacute;pend du type de divorce et de votre situation personnelle, ainsi un divorce &agrave; l'amiable peut &ecirc;tre prononc&eacute; en 1 &agrave; 3 mois alors qu'un divorce contentieux pourra &ecirc;tre beaucoup plus long.</p>"},


"/Avocat-Divorce.html" : {
	"keyword" 	: "Comment choisir son avocat en divorce ?",
	"title" 	: "Avocat divorce : Comment trouver son avocat pour un divorce ?",
	"text" 		: "	<img src='http://img.avocat.net/IAvocatDivorce.jpg' class='i_text'/>\
					<h1>Comment choisir son avocat pour un divorce ?</h1>\
					<p>Pour divorcer, le recours &agrave; un avocat est obligatoire aussi bien dans le cas d'un divorce par consentement mutuel que pour un divorce contentieux.</p>\
					<h2>Quel est le r&ocirc;le de l'avocat ?</h2>\
					<p>Lors d'un divorce, l'avocat vous informe sur vos droits et vous oriente dans le type de proc&eacute;dure appropri&eacute; &agrave; votre situation personnelle (enfants, bien immobiliers...)</p>\
					"+devis+"\
					<h2>Quel avocat choisir ?</h2>\
					<p>Dans le cas d'un divorce il est recommand&eacute; de s'adresser &agrave; un sp&eacute;cialiste du droit de la famille.</p>\
					<h2>Quel est le prix d'un divorce ?</h2>\
					<p>Avant le d&eacute;but de la proc&eacute;dure l'avocat vous fourni un devis fixant le montant de ses honoraires. L'aide juridictionnelle peut vous &ecirc;tre accord&eacute;e selon vos ressources mais certains avocats ne l'acceptent pas, posez lui la question d&egrave;s le d&eacute;but.</p>"},


"/Divorce-Pas-Cher.html" : {
	"keyword" 	: "Comment divorcer pas cher ?",
	"title" 	: "Divorce pas cher : Comment divorcer sans se ruiner ?",
	"text" 		: "	<img src='http://img.avocat.net/IDivorcePasCher.jpg' class='i_text'/>\
					<h1>Comment divorcer<br/>pas cher ?</h1>\
					<p>Le co&ucirc;t d'un divorce varie en fonction du type de divorce (consentement mutuel ou contentieux) et la complexit&eacute; de l'affaire (enfants, biens immobiliers...).</p>\
					<h2>Comment choisir le type de divorce ?</h2>\
					<p>Lorsque les deux &eacute;poux sont d'accord sur le divorce et ses cons&eacute;quences il est pr&eacute;f&eacute;rable de s'orienter vers un divorce amiable qui est plus rapide et moins cher. Dans le cas contraire ce sera un divorce contentieux plus complexe et surtout beaucoup plus long.</p>\
					"+devis+"\
					<h2>Est-il moins cher de divorcer &agrave; l'amiable ?</h2>\
					<p>Oui, si les &eacute;poux sont d'accord sur les cons&eacute;quences de leur s&eacute;paration, le divorce &agrave; l'amiable est beaucoup plus avantageux ; d'une part le travail de l'avocat est facilit&eacute; et surtout il est possible dans ce cas d'&ecirc;tre repr&eacute;sent&eacute;s par un avocat commun aux deux &eacute;poux et donc de partager les honoraires de l'avocat.</p>\
					<h2>Comment se passe la proc&eacute;dure de divorce en ligne ?</h2>\
					<p>Il est possible de se faire repr&eacute;senter par un avocat sans n&eacute;cessairement le rencontrer, ce qui permet de traiter plus rapidement la demande (g&eacute;n&eacute;ralement avec une plateforme internet de mise en relation client/avocat) et de diminuer les honoraires.</p>"},


"/Divorce-Rapide.html" : {
	"keyword" 	: "Comment divorcer rapidement ?",
	"title" 	: "Divorce rapide : Comment divorcer rapidement ?",
	"text" 		: "	<img src='http://img.avocat.net/IDivorceRapide.jpg' class='i_text'/>\
					<h1>Comment divorcer rapidement ?</h1>\
					<p>Lorsque les deux &eacute;poux sont d'accord sur le divorce et ses cons&eacute;quences il est possible de divorcer par consentement mutuel en 3 mois &agrave; partir de 240 euros TTC par &eacute;poux.</p>\
					<h2>Pourquoi un divorce sur internet est-il plus rapide ?</h2>\
					<p>Un divorce en ligne vous &eacute;vite les d&eacute;placements au cabinet de votre avocat, vous pouvez n&eacute;anmoins &eacute;changer facilement et &agrave; tout moment avec lui.</p>\
					<p>C'est la proc&eacute;dure la plus rapide (3 mois) et la moins ch&egrave;re (&agrave; partir de 240 euros par &eacute;poux).</p>\
					"+devis+"\
					<h2>Pourquoi la proc&eacute;dure de divorce prend elle du temps ?</h2>\
					<p>Selon le tribunal la proc&eacute;dure peut durer en moyenne de 1 &agrave; 6 mois, si vous d&eacute;sirez une consultation avec votre avocat la proc&eacute;dure peut &ecirc;tre allong&eacute;e.</p>\
					<p>Un divorce contentieux prendra plus de temps qu'un divorce par consentement mutuel.</p>\
					<h2>Comment divorcer rapidement ?</h2>\
					<p>Vous souhaitez divorcer rapidement ? Il vous suffit de vous mettre d'accord sur certains points avant de contacter votre avocat (devenir du domicile conjugal, r&eacute;partition des biens communs, conservation du nom d'&eacute;pouse pour madame, garde des enfants, montant de la pension alimentaire, remboursement des cr&eacute;dits communs, paiement des imp&ocirc;ts, paiements des frais d'avocat...).</p>\
					<p>Lorsque les deux &eacute;poux sont d'accords sur toutes ces questions, la proc&eacute;dure est claire et rapide.</p>"},

"/Divorce-Sans-Avocat.html" : {
	"keyword" 	: "Peut-on divorcer sans avocat ?",
	"title" 	: "Divorce sans avocat : Peut-on divorcer sans avocat ?",
	"text" 		: "	<img src='http://img.avocat.net/IDivorceSansAvocat.jpg' class='i_text'/>\
					<h1>Peut-on divorcer<br/>sans avocat ?</h1>\
					<p>Il est impossible de divorcer sans avocat, sa pr&eacute;sence est obligatoire pour r&eacute;diger l'acte de divorce ainsi qu'&agrave; l'audience. N&eacute;anmoins dans le cas de divorce par consentement mutuel vous pouvez avoir recours au divorce en ligne, vous n'&ecirc;tes ainsi pas oblig&eacute; de rencontrer votre avocat.</p>\
					<h2>Int&eacute;r&ecirc;ts de l'avocat</h2>\
					<p>Votre avocat est l&agrave; pour vous renseigner sur vos droits et vous orienter dans vos d&eacute;marches. Il pr&eacute;servera aux mieux vos int&eacute;r&ecirc;ts et ceux de vos enfants. La convention de divorce doit &ecirc;tre r&eacute;dig&eacute;e par un professionnel du droit.</p>\
					"+devis+"\
					<h2>Un m&ecirc;me avocat pour les deux &eacute;poux</h2>\
					<p>Dans le cas d'un divorce &agrave; l'amiable les deux &eacute;poux ont la possibilit&eacute; de se faire repr&eacute;senter par le m&ecirc;me avocat, la proc&eacute;dure est alors plus rapide (3 mois) et le tarif plus avantageux (&agrave; partir de 240 euros par &eacute;poux).</p>"},

"/Divorce-Par-Internet.html" : {
	"keyword" 	: "Comment divorcer par internet ?",
	"title" 	: "Divorce par internet : Comment divorcer par internet ?",
	"text" 		: "	<img src='http://img.avocat.net/IDivorceParInternet.jpg' class='i_text'/>\
					<h1>Comment divorcer<br />par internet ?</h1>\
					<p>Depuis la r&eacute;forme de divorce de 2004, le divorce par consentement mutuel est possible sur internet. Cette proc&eacute;dure est plus simple, plus rapide et surtout moins ch&egrave;re.</p>\
					<h2>Avantages du divorce par internet</h2>\
					<p>Le divorce par internet est rapide et bien moins cher qu'un divorce classique, il n'est pas n&eacute;cessaire de se rendre au cabinet de l'avocat et vous pouvez communiquer avec lui tr&egrave;s facilement gr&acirc;ce aux &eacute;changes &eacute;lectroniques.</p>\
					"+devis+"\
					<h2>Les limites du divorce par internet</h2>\
					<p>Dans certains cas il faut &eacute;viter d'avoir recours au divorce par internet : biens immobiliers &agrave; l'&eacute;tranger, plan de surendettement, mauvaise maitrise de la langue fran&ccedil;aise, un avocat diff&eacute;rent pour chaque &eacute;poux et en cas de d&eacute;saccords entre les deux &eacute;poux.</p>\
					<h2>Prix du divorce par internet </h2>\
					<p>En cas de divorce &agrave; l'amiable, un devis sera fix&eacute; par l'avocat avant le d&eacute;but de la proc&eacute;dure fixant un montant forfaitaire incluant l'int&eacute;gralit&eacute; des d&eacute;marches n&eacute;cessaire pour divorcer.  Dans le cas d'un divorce contentieux votre avocat vous proposera g&eacute;n&eacute;ralement un tarif horaire.</p>\
					<p>Selon vos ressources une aide juridictionnelle peut vous &ecirc;tre accord&eacute;e mais il convient de v&eacute;rifier avec votre avocat si celui-ci l'accepte.</p>"},
"/Divorce-En-Ligne.html" : {
	"keyword" 	: "Divorcer en ligne, est-ce possible ?",
	"title" 	: "Divorce en ligne : Comment trouver son avocat pour un divorce ?",
	"text" 		: "	<img src='http://img.avocat.net/IDivorceEnLigne.jpg' class='i_text'/>\
					<h1>Divorcer en ligne,<br/>est-ce possible ?</h1>\
					<p>Quelle que soit le type de divorce (amiable ou contentieux), il est obligatoire de se faire repr&eacute;senter par un avocat qui devra &ecirc;tre pr&eacute;sent &agrave; l'audience. M&ecirc;me si vous devez vous faire repr&eacute;sentez par un avocat vous pouvez le contacter par internet sans avoir besoin de vous d&eacute;placer &agrave; son cabinet.</p>\
					<h2>Peut-on rencontrer son avocat ?</h2>\
					<p>M&ecirc;me si la proc&eacute;dure se fait en ligne, &agrave; tout moment vous pouvez prendre rendez-vous avec votre avocat.</p>\
					"+devis+"\
					<h2>Quel est l'int&eacute;r&ecirc;t du divorce en ligne ?</h2>\
					<p>Le divorce en ligne est un gain de temps pour vous et votre avocat et surtout une &eacute;conomie importante par rapport &agrave; un divorce classique.</p>\
					<h2>Le divorce en ligne est-il sur ?</h2>\
					<p>Votre demande sera re&ccedil;ue et trait&eacute;e par un avocat, vous b&eacute;n&eacute;ficier des m&ecirc;mes garanties que lors d'une consultation dans un cabinet.</p>\
					<h2>Comment se d&eacute;roule la proc&eacute;dure ?</h2>\
					<p>Les &eacute;poux font une premi&ecirc;re demande de devis en ligne en remplissant un questionnaire d&eacute;taill&eacute;. L'avocat  d&eacute;pose ensuite le dossier au tribunal ou une date d'audience sera fix&eacute;e. Vous serez convoqu&eacute; par le juge pour une audience ou votre divorce sera prononc&eacute;.</p>"},
"/Cout-Divorce.html" : {
	"keyword" 	: "Combien co&ucirc;te un divorce ?",
	"title" 	: "Cout divorce : combien coute un divorce ?",
	"text" 		: "	<img src='http://img.avocat.net/ICoutDivorce.jpg' class='i_text'/>\
					<h1>Combien co&ucirc;te<br/>un divorce ?</h1>\
					<p>Les avocats fixent librement leurs honoraires, les couts varient donc d'un cabinet &agrave; un autre. Le cout d'un divorce varie en fonction du type de proc&eacute;dure, de votre situation personnelle (enfants, bien immobiliers.), de votre r&eacute;gion.</p>\
					<h2>Peut-on rencontrer son avocat ?</h2>\
					<p>M&ecirc;me si la proc&eacute;dure se fait en ligne, &agrave; tout moment vous pouvez prendre rendez-vous avec votre avocat.</p>\
					"+devis+"\
					<h2>Prix d'un divorce</h2>\
					<p>Avant le d&eacute;but de la proc&eacute;dure un devis sera &eacute;tabli en fonction d'un questionnaire d&eacute;taill&eacute; rempli par les &eacute;poux, le forfait prendra en compte l'int&eacute;gralit&eacute; des frais de la proc&eacute;dure.</p>\
					<h2>Quel divorce est le moins cher ? </h2>\
					<p>Le divorce &agrave; l'amiable est le moins cher (en moyenne 400euros par &eacute;poux), principalement car les deux &eacute;poux ont la possibilit&eacute; d'&ecirc;tre repr&eacute;sent&eacute;s par le m&ecirc;me avocat r&eacute;duisant ainsi les honoraires, il est plus simple et plus rapide (g&eacute;n&eacute;ralement le divorce est prononc&eacute; en moins de 3 mois).</p>"}};

page_introuvable = "<h1>Page Introuvable</h1><p>Cette page n'existe pas.</p>";


(function() {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
    var checkReady = function(callback) {
        if (window.jQuery) {
            startSite();
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 100);
        }
    };
    checkReady(function($) {
    });
})();

function startSite() {
 	$("body *").hide();
	$("head").append(css);	   	

	tpl_header = '<div class="h">';
		tpl_header += '<div class="h_content href" href="/">';
			tpl_header += '<font class="h_logo">'+site+'</font><font class="h_ext">'+ext+'</font>';
		tpl_header += '</div>';
	tpl_header += '</div>';
	
	tpl_page = '<div class="page">';
		tpl_page += '<div class="block">';
			tpl_page += '<div class="m">';
			for (url in pages) {
				tpl_page += "<div class='m_link href' href='"+url+"'>"+pages[url]["keyword"] +'</div>';
			}					
			tpl_page += '</div>';
		tpl_page += '</div>';
		tpl_page += '<div class="block">';
			tpl_page += '<div class="content">';
			tpl_page += '</div>';
		tpl_page += '</div>';
	tpl_page += '</div>';

	$("body").append(tpl_header + tpl_page).show();
	
	setContentUrl(window.location.pathname);

	$(".href").click(function(e) {
		setContentUrl($(this).attr("href"))
	});
}

function	setContentUrl(url)
{
	window.history.pushState('', '', url);
	if (pages[url] != undefined)
		$(".content").html(pages[url]["text"]);
	else
		$(".content").html(page_introuvable);
	window.document.title = pages[url]["title"];
	$(".m_link").removeClass("m_s");
	$(".m_link[href='"+url+"']").addClass("m_s");
	
	$(".AffiliateDevis").html('<iframe style="margin:0px;margin-top:20px;border: 1px solid #FFFFFF;width: 100%;height: 271px;overflow:hidden" id="frame_devis" frameborder="0" src="http://www.avocat.net/index_popup.php?page=devis_question&type=5&noTrack=noTrack&domaine=4&utm_source='+location.hostname+'&utm_medium=Display&utm_campaign=affiliation&utm_term=&uri='+location.href+'"></iframe>');
}