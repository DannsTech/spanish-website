///top var

var buttonShow = document.getElementById('button');



function vivi () {
document.getElementById('modal-box').style.visibility = ('visible');



}

buttonShow.addEventListener('click', vivi);


function yoyo () {


document.getElementById('modal-box').style.visibility = ('hidden');


}

document.getElementById('modal-box').addEventListener('click', yoyo);

///ending of top bar


///baiscs

///hola modal

var holaButton = document.getElementById('box box-1');

function hola () {

document.getElementById('modal-hello').style.visibility = ('visible');



}

holaButton.addEventListener('click', hola);

function bye (){

document.getElementById('modal-hello').style.visibility = ('hidden');


}

document.getElementById('modal-hello').addEventListener('click', bye);










//como estas

var comoButton = document.getElementById('box box-2');

function como () {

document.getElementById('modal-como').style.visibility = ('visible');



}

comoButton.addEventListener('click', como);

function sali () {


document.getElementById('modal-como').style.visibility = ('hidden');


}

document.getElementById('modal-como').addEventListener('click', sali);


//gracias

var graciasButton = document.getElementById('box box-3');

function gracias(){

document.getElementById('modal-gracias').style.visibility = ('visible');

}

graciasButton.addEventListener('click', gracias);

function byeGracias () {

    document.getElementById('modal-gracias').style.visibility = ('hidden');
}

document.getElementById('modal-gracias').addEventListener('click', byeGracias);


//adios

var adiosButton =  document.getElementById('box box-4');

function adios () {

document.getElementById('modal-adios').style.visibility = ('visible');

}

adiosButton.addEventListener('click', adios);

function adiosClose () {

document.getElementById('modal-adios').style.visibility = ('hidden');


}   

document.getElementById('modal-adios').addEventListener('click', adiosClose);





//nombre

var nombreButton = document.getElementById('level level-one');

function levelOneStart () {

document.getElementById('modal-nombre').style.visibility = ('visible');

}

nombreButton.addEventListener('click', levelOneStart);

function levelOneBye () {

    document.getElementById('modal-nombre').style.visibility = ('hidden');

}

document.getElementById('modal-nombre').addEventListener('click', levelOneBye);


//buenos


var buenosButton =  document.getElementById('level level-two');

function levelTwoStart () {

    document.getElementById('modal-buenos').style.visibility = ('visible');

}

buenosButton.addEventListener('click', levelTwoStart);

function  levelTwoBye () {

document.getElementById('modal-buenos').style.visibility = ('hidden');

}

document.getElementById('modal-buenos').addEventListener('click', levelTwoBye);


//donde

var dondeButton = document.getElementById('level level-three');

function startDonde () {

document.getElementById('modal-donde').style.visibility = ('visible');

}

dondeButton.addEventListener('click', startDonde);

function byeDonde () {  document.getElementById('modal-donde').style.visibility = ('hidden');     }

document.getElementById('modal-donde').addEventListener('click', byeDonde);


//disculpe

var disculpeButton = document.getElementById('level level-four');
var modalDisculpe = document.getElementById('modal-disculpe');

function startDisculpe() {

modalDisculpe.style.visibility = ('visible');


}

disculpeButton.addEventListener('click', startDisculpe);

function  byeDisculpe () {

modalDisculpe.style.visibility = ('hidden');


}

modalDisculpe.addEventListener('click', byeDisculpe);

//noches

var nochesButton = document.getElementById('level level-five');
var modalNoches = document.getElementById('modal-noches');

function startNoches   () {  modalNoches.style.visibility = ('visible')           }

nochesButton.addEventListener('click', startNoches);

function   byeNoches    () {  modalNoches.style.visibility = ('hidden')                   }

modalNoches.addEventListener('click', byeNoches);

//luego

var luegoButton = document.getElementById('level level-six');
var modalLuego = document.getElementById('modal-luego');

function startLuego   () {  modalLuego.style.visibility = ('visible')               }

luegoButton.addEventListener('click', startLuego);

function  byeLuego () {  modalLuego.style.visibility = ('hidden')                        }

modalLuego.addEventListener('click', byeLuego);


// yo

var yoButton = document.getElementById('two two-1');
var yoModal = document.getElementById('modal-yo');

function startYo () {   yoModal.style.visibility = ('visible')             }
yoButton.addEventListener('click', startYo);
function byeYo () {  yoModal.style.visibility = ('hidden')                                        } 
yoModal.addEventListener('click', byeYo);

//el-ella

var elButton = document.getElementById('two two-2');


function startEl () {   document.getElementById('modal-ellos').style.visibility = ('visible')             }
elButton.addEventListener('click', startEl);

function closeEl () {    document.getElementById('modal-ellos').style.visibility = ('hidden')                       }
document.getElementById('modal-ellos').addEventListener('click',closeEl );

//them 

var themButton = document.getElementById('two two-3');

var themModal = document.getElementById('modal-them');

function startThem () { themModal.style.visibility = ('visible')               }
themButton.addEventListener('click',startThem);

function  byeThem () { themModal.style.visibility = ('hidden')                                }
themModal.addEventListener('click', byeThem);

//nosotros

var usButton = document.getElementById('two two-4');
var usModal = document.getElementById('modal-us');

function us () { usModal.style.visibility = ('visible')                         }

usButton.addEventListener('click', us);

function usBye  () {  usModal.style.visibility = ('hidden')                                   }

usModal.addEventListener('click', usBye);


//ustedes

var ustedesButton = document.getElementById('two two-5');
var ustedesModal = document.getElementById('modal-ustedes');

function startUstedes () { ustedesModal.style.visibility = ('visible')   }

ustedesButton.addEventListener('click', startUstedes);

function   pandaClick () {  ustedesModal.style.visibility = ('hidden')            }

ustedesModal.addEventListener('click', pandaClick);