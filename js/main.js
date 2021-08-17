$(document).ready(function() {
	
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 100);
	
	function progressBar(percent, $element) {
		var progressBarWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBar(20, $('#progressBar'));
		
	var select = $( "#futcoins-amount-wrapper" );
	var slider = $( "<div id='slider-futcoins'></div>" ).insertAfter( select ).slider({
		min: 200000,
		max: 1000000,
		value: 200000,
		range: "min",
		change: function(event, ui) { 
			var sliderValue = $( "#slider-futcoins" ).slider( "option", "value" );				
			$('#futcoins-amount').html(sliderValue);
			if(sliderValue == '200000') {
				progressBar(20, $('#progressBar'));
				$('#decrease-futcoins').addClass('btn-disabled');
				$('.max-amount-coins').fadeOut();
			}
			else if (sliderValue == '400000') {
				progressBar(40, $('#progressBar'));
				$('#decrease-futcoins').removeClass('btn-disabled');
			}
			else if (sliderValue == '600000') {
				progressBar(60, $('#progressBar'));
			}
			else if (sliderValue == '800000') {
				progressBar(80, $('#progressBar'));
				$('#increase-futcoins').removeClass('btn-disabled');
				$('.max-amount-coins').fadeOut();
			}
			else if (sliderValue == '1000000') {
				progressBar(100, $('#progressBar'));
				$('#increase-futcoins').addClass('btn-disabled');
				$('.max-amount-coins').fadeIn();
			}
		}        
	});	
	
	$('#increase-futcoins').click(function() {
	var sliderCurrentValue = $( "#slider-futcoins" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue + 200000 );
	});

	$('#decrease-futcoins').click(function() {
	var sliderCurrentValue = $( "#slider-futcoins" ).slider( "option", "value" );
	  slider.slider( "value", sliderCurrentValue - 200000 );
	});

	function progressBarPoints(percent, $element) {
		var progressBarPointsWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarPointsWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarPoints(20, $('#progressBarPoints'));
	var selectPoints = $( "#futpoints-amount-wrapper" );
	var sliderPoints = $( "<div id='slider-futpoints'></div>" ).insertAfter( selectPoints ).slider({
		min: 20000,
		max: 100000,
		value: 20000,
		range: "min",
		change: function(event, ui) { 
				var sliderValuePoints = $( "#slider-futpoints" ).slider( "option", "value" );
				$('#futpoints-amount').html(sliderValuePoints);
					if(sliderValuePoints == '20000') {
						progressBarPoints(20, $('#progressBarPoints'));
						$('#decrease-futpoints').addClass('btn-disabled');
						$('.max-amount-points').fadeOut();
					}
					else if (sliderValuePoints == '40000') {
						progressBarPoints(40, $('#progressBarPoints'));
						$('#decrease-futpoints').removeClass('btn-disabled');
					}
					else if (sliderValuePoints == '60000') {
						progressBarPoints(60, $('#progressBarPoints'));
					}
					else if (sliderValuePoints == '80000') {
						progressBarPoints(80, $('#progressBarPoints'));
						$('#increase-futpoints').removeClass('btn-disabled');
						$('.max-amount-points').fadeOut();
					}
					else if (sliderValuePoints == '100000') {
						progressBarPoints(100, $('#progressBarPoints'));
						$('#increase-futpoints').addClass('btn-disabled');
						$('.max-amount-points').fadeIn();
					}
				}        
	});				

	$('#increase-futpoints').click(function() {
		var sliderCurrentPointsValue = $( "#slider-futpoints" ).slider( "option", "value" );
		sliderPoints.slider( "value", sliderCurrentPointsValue + 20000 );
	});

	$('#decrease-futpoints').click(function() {
		var sliderCurrentPointsValue = $( "#slider-futpoints" ).slider( "option", "value" );
		sliderPoints.slider( "value", sliderCurrentPointsValue - 20000 );
	});
	
	$('#first-step-button').click(function () {
		$('#account-information-wrapper').fadeIn(250);
		$('#close-account-information-wrapper').click(function () {
			$('#account-information-wrapper').fadeOut(100);
		});
	});
	
	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarConsole(1, $('#progressBarConsole'));	

	function loading_step() {
		$('#account-information-wrapper').fadeOut(50);
		$('#resources-select-wrapper').fadeOut(500, function() {
			$('#processing-wrapper').fadeIn(500, function() {
				var $console_message_username_msg = $('#account-username').val();
				var $console_message_platform_msg = $('#account-platform').val();
				var $console_message_futcoins_msg = $('#slider-futcoins').slider("option", "value");   
				var $console_message_futpoints_msg = $('#slider-futpoints').slider("option", "value");
				var $console_message = $('.console-message');
				if ($(window).width() < 600) {
					window.scrollTo(0, $("#processing-wrapper").offset().top);
				}	
				setTimeout(function() {
					$('.starting-loading-wrapper').fadeIn();
					$console_message.text('carregando arquivos...');	
					progressBarConsole(3, $('#progressBarConsole'));			
				}, 0 );
				setTimeout(function() { 
					$console_message.text('preparando arquivos...');	
					progressBarConsole(15, $('#progressBarConsole'));			
				}, 1000 );
				setTimeout(function() { 
					$console_message.text('carregando...');	
					progressBarConsole(18, $('#progressBarConsole'));			
				}, 1800 );
				setTimeout(function() { 
					$console_message.html("Procurando por nome de usuário <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> ...");	
					progressBarConsole(22, $('#progressBarConsole'));			
				}, 3000 );
				setTimeout(function() { 
					$console_message.html("Conectando ao nome de usuário <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> no <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span> dispositivo");	
					$('.starting-loading-wrapper').fadeOut(500, function() {
						$('.console-username-wrapper').fadeIn();
						$('.console-platform-wrapper').fadeIn(500);
					});		
					progressBarConsole(26, $('#progressBarConsole'));			
				}, 5000 );
				setTimeout(function() { 
					$console_message.html("Conectado com sucesso ao nome de usuário <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>");
					$('#console-username-value').text($('#account-username').val());
					$('#console-platform-value').text($('#account-platform').val());
					$('#console-success-confirmation-username').fadeIn();
					$('#console-success-confirmation-platform').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});					
					progressBarConsole(30, $('#progressBarConsole'));			
				}, 8000 );
				setTimeout(function() { 
					$console_message.html("Preparando-se para gerar recursos");	
					progressBarConsole(35, $('#progressBarConsole'));			
				}, 10000 );
				setTimeout(function() { 
					$console_message.html("Gerando Pacotes");	
					progressBarConsole(38, $('#progressBarConsole'));			
				}, 11000 );
				setTimeout(function() { 
					$console_message.html("Gerando <span class='console-message-connected-item'>" + $console_message_futcoins_msg + "</span> moedas");
					$('.console-futcoins-wrapper').fadeIn(500, function() {
						var $console_futcoins_countto = $('#slider-futcoins').slider("option", "value");
						$('#console-futcoins-value').countTo({
							from: 0,
							to: $console_futcoins_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							  return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(42, $('#progressBarConsole'));			
				}, 12500 );
				setTimeout(function() {
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_futcoins_msg + "</span> <span class='console-message-success'>Gerados com Sucesso</span>");
					$('#console-success-confirmation-futcoins').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(55, $('#progressBarConsole'));			
				}, 16000 );
				setTimeout(function() { 
					$console_message.html("Gerando Pacotes de moedas");	
					progressBarConsole(58, $('#progressBarConsole'));			
				}, 18000 );
				setTimeout(function() { 
					$console_message.html("Gerando <span class='console-message-connected-item'>" + $console_message_futpoints_msg + "</span> diamantes");
					$('.console-futpoints-wrapper').fadeIn(500, function() {
						var $console_futpoints_countto = $('#slider-futpoints').slider("option", "value");
						$('#console-futpoints-value').countTo({
							from: 0,
							to: $console_futpoints_countto,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (value, options) {
							  return value.toFixed(options.decimals);
							}
						});
					});
					progressBarConsole(62, $('#progressBarConsole'));			
				}, 19500 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>" + $console_message_futpoints_msg + "</span> <span class='console-message-success'>diamantes gerados com sucesso</span>");
					$('#console-success-confirmation-futpoints').fadeIn();
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(74, $('#progressBarConsole'));			
				}, 23000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-success'>Todos os recursos foram gerados com sucesso</span>");	
					progressBarConsole(80, $('#progressBarConsole'));			
				}, 24900 );
				setTimeout(function() { 
					$console_message.html("Otimizando pacotes gerados");	
					progressBarConsole(84, $('#progressBarConsole'));			
				}, 25900 );
				setTimeout(function() { 
					$console_message.html("Limpeza de vestígios de injeção");	
					progressBarConsole(90, $('#progressBarConsole'));			
				}, 27000 );
				setTimeout(function() { 
					$console_message.html("Executando Verificação Humana");	
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 28000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-error'>Falha na verificação humana automática</span>");	
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 30000 );
				setTimeout(function() { 
					$console_message.html("<span class='console-message-connected-item'>Verificação manual humana necessária</span>");
					$(".console-message").addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('pulse animated');
					});
					progressBarConsole(93, $('#progressBarConsole'));			
				}, 32500 );
				setTimeout(function() {
					$('#human-verification').fadeIn();
					$console_message.html("Aguardando Verificação Humana");	
					if ($(window).width() < 600) {
						window.scrollTo(0, $("#human-verification").offset().top);
					}					
				}, 33500 );
			});
		});		
		
		
		var $console_futpoints_countto = $('#slider-futpoints').slider("option", "value");
		$('#console-futpoints-value').countTo({
			from: 0,
			to: $console_futpoints_countto,
			speed: 2000,
			refreshInterval: 10,
			formatter: function (value, options) {
			  return value.toFixed(options.decimals);
			}
		});        	
    }
	
	$('#second-step-button').click(function() {
		if ($('#account-username').val() != '') {
			loading_step()
		}
		else {
			swal("Error", "Please enter your Username.", "error");
		}
	});
	
    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });
	
	$('.f-s').fancySelect();
	
});


var ee;
var eenum2 = 994;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 1000);
}
dis_num3();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "goldenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "GoldStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGGoldenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
var ChatContent = ["Quanto dinheiro posso gerar?", "Alguém já tentou isso?", "Funciona em NA?", "Por que isso é tão fácil lol?", "Isso é incrível, nunca pensei que daria certo." , "Eu gerei 800.000 em dinheiro, mal posso esperar para começar.", "Funciona perfeitamente.", "Alguém pode me ajudar com a pesquisa?", "MANO!", "CARA!", "ROFL!", "Real "," haha ​​"," fácil "," mano "," O que posso fazer aqui? "," Cale a boca cara, adoro este site "," oi gente "," Quanto cashu ganhou até agora? "," o que sobre pesquisas no celular? "," Isso é gratuito? "," Quanto tempo você tem que esperar? "," Sim "," Não "," Eu sei "," Exatamente por que isso é tão bom "," uhm "," talvez "," Não posso mais esperareee "," Isso é para caras de verdade? "," Obrigado cara, agradeço isso. "," Legal =) "," <mensagem excluída> "," oh site " , "caramba", "Eu amo isso", "Nunca imaginei que isso funcionasse, mas é tão simples", "vi isso em fóruns bem impressionante", "Vocês não fazem spam, ok?", "Alguém quer jogar?" , "você acha que isso será corrigido em breve", "tenho certeza que isso está me economizando muito dinheiro", "qualquer ideia de como quanto tempo leva para o dinheiro chegar? "," tão feliz por ter encontrado isso "," vocês assistem Nightblue? "," Eu vi este site no Twitch Stream, eu acho "," uau "," Onde eu consigo meu dinheiro? "," um amigo me falou sobre isso "," obrigado a quem spams este site rs "," onde coloquei meu código? "," até agora estou bem com isso "," posso obter de graça? "," tchau galera "," ok, apliquei obrigado "," quanto você pode ter "," incrível "," dez minutos "," preciso ir agora "," brb ","Você deveria tentar "," não se arrependa de estar aqui "," porra é real "," mano pare de perguntar como tirar dinheiro, pegue no gerador "," gente, isso é tão fácil, leva menos de um minuto " , "Alguém pode fazer isso por mim? Meu nome de usuário é brazilinaronaldo "," PM me pls "," sucks noobs haha ​​"," EA pls "," hoje é dia de sorte "," este é o melhor site porque todos temos mais do que uma chance "," acho que todos aqui tenho meu dinheiro "," quando posso jogar sou novo nisso "," de graça? "," O dinheiro expira? "," Tenho um grande pacote de dinheiro para minha namorada, fazendo-a feliz e não pago por eles lol "," os servidores do homem estão sempre desligados, porra "," engraçado como isso funciona, mas como sempre "," oi de novo, estou aqui para mais dinheiro "," preciso de algum dinheiro, o que eu faço "," funcionou lol "," foda-se, não tenho mais pesquisas, já tinha tipo 50k no meu acc "," de onde todos vocês vêm "," página legal "," estava preso na pesquisa tinha que fazer de novo, mas funcionou então ", "obrigado por me dar dinheiro!", "vi no stream yo", "funcionando bem", "adoro", "isso torna meu jogo mais agradável, espero", "obrigado a todos por me ajudarem, manos", "graças a quem me mandou a mensagem funcionou", "obrigado por me enviar mensagens, cara", "quando você quer jogar?", "imagine todas as pessoas esperando para este "," alguma ideia se ainda funciona amanhã "," melhor site de ferramentas "," isso é chat do twitch? "," uau tem muita gente online aqui "," oi a todos que tem grana pra mim "," ninguém tá aqui pra grana rs? "," qual foi a mais nova expansão "," quem quer bater um papo hehe? " , "eu jogo na UE", "verifique meu perfil, sou rico", "quando é que começam os homens?", "até os novatos podem fazer isso", "quando vocês começaram a jogar uau", "só posso recomendar essas coisas "," ótimo, posso testar a expansão antes de comprá-la "," mal posso esperar para começar! "," de onde você vem? "," esse sorteio dura para sempre? "," formulário de inscrição em dinheiro muito bom pessoal "," começo a gostar muito disso. terceiro pacote que desbloqueei "," vale a pena "," ok legal "," não vejo limites em quanto dinheiro você pode conseguir, isso é tão épico "," em qual país você está jogando, rapazes? "," acho que sim, cara "," Provavelmente , mas acho que um dia isso vai falhar "," isso ainda funciona no momento "," não vi isso antes, mas estou impressionado com o resultado! "," meu namorado vai pirar: D "," legal "," pesquisas não aparecem todas as vezes, mas acho que está lá para ter dinheiro suficiente para o site comprar obter os códigos de caixa "," na verdade eu não tive nenhum problema com qualquer pesquisa, apenas tente? "," este site é muito usado às vezes você tem que esperar um pouco "," onde você encontrou isso? "," então quando o dinheiro vai começar? "," ty para a opção de dinheiro em pessoal! "," Eu gostaria de ter encontrado isso antes "," eu perdi muito dinheiro em dinheiro lol - bom, isso é de graça aqui "," como é que eu não vejo nenhum trolls aqui "," apenas evitei a fila para isso "," qualquer irmão precisa de ajuda? "," Eu faria uma captura de tela, mas talvez você me denuncie então "," existem novas armas neste pacote de expansão? "," você já experimentou o pacote 1220? Usei em NA, mas talvez outras localidades também possam usar "," trololo é uma merda hahahaha "," acho que esse vai ser o melhor! estava começando a get chato lol "," acho que sim "," o que você pode conseguir dinheiro aqui de graça? "," ok parece bom o suficiente para mim manos "," alguém reddit aqui? "," Ok, acho que funciona, porque acabei de logar em e vi meu ROFL de dinheiro "," Tive um pouco de dificuldade com alguma coisa survy, mas não há problema se você escolher um fácil "," meus amigos no Facebook enviam spam assim todos os dias, eles estão muito felizes com isso "," Onde fazer coloquei meu telefone "," o quê? "," sim, também peguei "," por que alguém iria aqui para odiar e enviar spam pff "," noobs, por favor, se você não sabe como fazer, não envie spam aqui, ok ", "ótimo gerador bom achei isso", "espero que não haja muitas crianças neste chat", "josh, você está aqui?", "desbloquear leva algum tempo para mim", "derp", "estou curioso, isso é legítimo?" , "Funciona no OCE?", "Teve que recarregar a página antes de funcionar", "usei isso três vezes e solicitei 1200 pacotes de dinheiro, lol vejo seus otários no jogo", "vejo a maioria das pessoas aqui escrevendo coisas positivas, é verdade? "," oi meu inglês não é bom "," Exatamente o que eu penso "," você pode ter reginalds IQ e stil Posso conseguir dinheiro desconhecido "," quando cheguei a este site pela primeira vez eu estava como a maioria de vocês apenas enviando spam aqui no chat, no final estou feliz por ter tentado, porque agora para o próximo ano ou então eu não vou sair meu quarto "," se você quiser uma prova me adicione no skype "," espero que esse lançamento traga alguns jogadores de volta "," obrigado! "," você não está entediado? mal posso esperar pelo pacote de expansão "," procuro um amigo, por favor, me mande um email "," achei que meu amigo queria me enganar com o link deste site. mas você pode rly conseguir dinheiro aqui se não atrapalhar a parte da pesquisa "," aasdasdasd "," Ok, estou de volta e o que posso dizer é que recebi meu dinheiro desconhecido! Não consigo fazer uma captura de tela porque o chat bloquearia todos os links meh, mas rly tente, vale a pena "," vale a pena pegar o meu chave do dinheiro "," eu concordo "," estou bem em ter dinheiro de graça e você "," o que eu sempre não gostei é quando você se aproxima da data de lançamento e eles avançam ainda mais "," de todos os sites que eu visitei este é o primeiro e provavelmente o único que rly lhe dá o dinheiro "," eu tentei muitas pesquisas na minha vida, finalmente tive sorte aqui "," sim, dinheiro grátis aqui? você estava no meu skype! como vai você cara "," eu verifiquei alguns dos relatos de pessoas aqui, eles são realmente humanos reais, mas talvez nem todos "," agora o segredo foi resolvido ","isso funciona para jogadores da UE, certo?", "ei, eu sou um novato, poderei jogar?", "inscrevi-me, agora a espera começa: / espero que eles sejam lançados antes", "posso fazer isso com meu telefone Nexus? "," ... ^^ "," algumas pessoas hilárias pra caralho "," lá vou eu "," uau 10 minutos atrás isso estava vazio agora todas as pessoas aqui wtf "," trabalhando "," Site, obrigado por este "," posso imaginar que "," ok "," não tenho certeza se entendi? está tudo de graça, certo? "," Eu ficaria muito triste se isso não funcionasse porque demorou um pouco, felizmente funcionou então " , "uhm", "então vocês podem comprar 250000 em dinheiro agora, pessoal?", "acho que com o novo jogo pode se tornar um pouco mais interessante "," caralho helll! peguei meu dinheiro desconhecido !. "," yayy "," servidores eu testei isso e está funcionando "," eu costumo escolher a primeira oferta da lista porque normalmente é a mais fácil "," acho que algumas ofertas são mais fáceis em países como os EUA "," se você escolheu uma oferta certifique-se de terminá-la completa ou você não vai se inscrever para receber dinheiro aqui por enviar spam para essa merda lol "," você é estúpido ou algo assim? eles têm proteção anti-bot "," sure bot, 0101010110 lmao xD "," não, não somos bots Kappa"];


$(document).ready(function() {


    ChatStart();
    ChatLog("Bem-vindo (a) à sala de chat, postar links ou spam resultará em um chute.");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#livechatInputChat')['keypress'](function(_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#livechatButtonChat')['click']();
        };
    });
    $('#livechatButtonChat')['click'](function() {
        if (ChatUserName == '') {
            $('#livechatContainerChatUserName')['fadeIn'](250);
            $('.livechatOverlaySmall').fadeIn(200);
        } else {
            $msg = $('#livechatInputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#livechatInputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function() {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  lol pare de spam e use o gerador');

                    setTimeout(function() {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span>  É sua primeira vez aqui? este é o único gerador de diamantes legítimo que existe');
                        setTimeout(function() {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + ' &nbsp;</span> ' + ' ele só quer tudo para si haha');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#livechatButtonChatUserName')['click'](function() {
        ChatUserName = $('#livechatInputChatUserName')['val']();
        $('#livechatContainerChatUserName')['fadeOut'](250, function() {
            $('.livechatOverlaySmall').fadeOut(200, function() {
                $('#livechatButtonChat')['click']();
            });
        });
    });


});

Date.prototype.getFullMinutes = function() {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function() {

    $('#livechatInputComment').focus(function() {
        $('#livechatContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function() {
        setTimeout(function() {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            ChatAddEntry(_0xaa63x9, _0xaa63xa);
            _0xaa63x8();
        }, Random(1000, 15000));
    };
    _0xaa63x8();
};
