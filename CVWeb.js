// Ajout des constantes de la Sous Section Compétence DEV WEB
const Competences = document.querySelectorAll(".Texte")
const NbSlide = Competences.length
const suivant = document.querySelector(".Suivant")
const precedent = document.querySelector(".Precedent")
let count = 0;

// Fonction Switch Compétence DEV WEB
function CompSuivante(){
    Competences[count].classList.remove("active")

    if (count < NbSlide - 1) {
        count++
    }
    else{
        count=0
    }

    Competences[count].classList.add("active")
}

// Bouton Flèche de Droite switch vers la droite
suivant.addEventListener("click", CompSuivante)


// Fonction Switch Compétence DEV WEB
function CompPrecedent(){
    Competences[count].classList.remove("active")

    if (count > 0) {
        count--
    }
    else{
        count = NbSlide - 1
    }

    Competences[count].classList.add("active")
}

// Bouton Flèche de Gauche switch vers la gauche
precedent.addEventListener("click", CompPrecedent)


// Ajout des constantes de la Sous Section Diplôme
const BtnBac = document.querySelector(".BtnInfoBac")

// Fonction Affichage des Info du BAC avec Bouton qui l'active
function AffInfoBac(elt){
    
    const InfoBac = document.querySelector(".InfoBac")
    if(elt.innerHTML == "+"){
        elt.innerHTML = "-";
        InfoBac.style.display = "block";    
    } 
    else {
        elt.innerHTML = "+";
        InfoBac.style.display = "none";
    }        
}
BtnBac.addEventListener("click",function(e){
    AffInfoBac(e.target);
});


// Fonction Affichage des Info du BAFA avec Bouton qui l'active
const BtnBAFA = document.querySelector(".BtnInfoBAFA")
function AffInfoBAFA(elt){
    
    const InfoBAFA = document.querySelector(".InfoBAFA")
    if(elt.innerHTML == "+"){
        elt.innerHTML = "-";
        InfoBAFA.style.display = "block";    
    } 
    else {
        elt.innerHTML = "+";
        InfoBAFA.style.display = "none";
    }        
}
BtnBAFA.addEventListener("click",function(e){
    AffInfoBAFA(e.target);
});


// Fonction Affichage des Info du Brevet avec Bouton qui l'active
const BtnBrevet = document.querySelector(".BtnInfoBrevet")
function AffInfoBrevet(elt){
    
    const InfoBrevet = document.querySelector(".InfoBrevet")
    if(elt.innerHTML == "+"){
        elt.innerHTML = "-";
        InfoBrevet.style.display = "block";    
    } 
    else {
        elt.innerHTML = "+";
        InfoBrevet.style.display = "none";
    }        
}
BtnBrevet.addEventListener("click",function(e){
    AffInfoBrevet(e.target);
});


// Fonction Affichage des Info du Brevet de Sauvetage avec Bouton qui l'active
const BtnSauvetage = document.querySelector(".BtnInfoSauvetage")
function AffInfoSauvetage(elt){
    
    const InfoSauvetage = document.querySelector(".InfoSauvetage")
    if(elt.innerHTML == "+"){
        elt.innerHTML = "-";
        InfoSauvetage.style.display = "block";    
    } 
    else {
        elt.innerHTML = "+";
        InfoSauvetage.style.display = "none";
    }        
}
BtnSauvetage.addEventListener("click",function(e){
    AffInfoSauvetage(e.target);
});






const BtnExempleArriere= document.querySelector(".BtnExemple")
function RetournementBlocArriere(){
    const BlocRetourner = document.querySelector(".BlocRetournement")
    if (BlocRetourner.className == "BlocRetournement") {
        BlocRetourner.className +=" Retour"
    }
    else{
        BlocRetourner.className = "BlocRetournement"
    }
}


BtnExempleArriere.addEventListener("click",function(e){
    e.preventDefault();
    RetournementBlocArriere();
});



const BtnRetourAccueil= document.querySelector(".BtnRetourAccueil")
function RetournementBlocArriere(){
    const BlocRetourner = document.querySelector(".BlocRetournement")
    if (BlocRetourner.className == "BlocRetournement Retour") {
        BlocRetourner.className +="BlocRetournement"
    }
    else{
        BlocRetourner.className = "BlocRetournement Retour"
    }
}


BtnRetourAccueil.addEventListener("click",function(e){
    e.preventDefault();
    RetournementBlocArriere();
});









const Exemple = [
    {
        Rendu: "Image12345.JPG",
        Code: {
            HTML:"Image12345.JPG",
            CSS:"Image12345.JPG",
            JS:"Image12345.JPG"
        }
    },
    {
        Rendu:"Image12345.JPG",
        Code: {
            HTML:"Image12345.JPG",
            CSS:"Image12345.JPG",
            JS:"Image12345.JPG",
        }
    }
]


let Nbre = 0
let Exemple1 = Exemple[Nbre]

let TableauComp = ["HTML","CSS","JS"]
let NbreComp = 0
let ListComp = TableauComp[NbreComp]

function AfficheArriereComp(CompName){
    document.querySelector(".PageArrierePartie1 h1").innerHTML = CompName
    switch(CompName){
        case "CSS" :
            document.getElementById("ImgCode").src = "img/"+Exemple1.Code.CSS;
            break;
        case "JS" :
            document.getElementById("ImgCode").src = "img/"+Exemple1.Code.JS;
            break;
        default :
            document.getElementById("ImgCode").src = "img/"+Exemple1.Code.HTML;
            break;
    }
}

(function(){
    console.log("img/"+Exemple1.Code.HTML);
    AfficheArriereComp(ListComp)
    document.getElementById("ImgRendu").src = "img/"+Exemple1.Rendu
    document.querySelector(".BtnImgDroite").addEventListener("click",function(e){
        e.defaultPrevented;
        Nbre++;
        if (Nbre >= Exemple.length) {
            Nbre=0;
        }
        Exemple1= Exemple[Nbre]
        AfficheArriereComp(ListComp)
        document.getElementById("ImgRendu").src ="img/"+Exemple1.Rendu;
    })

    document.querySelector(".BtnImgGauche").addEventListener("click",function(e){
        e.defaultPrevented;
        Nbre--;
        if(Nbre < 0){
            Nbre = Exemple.length - 1;
        }
        Exemple1= Exemple[Nbre]
        AfficheArriereComp(ListComp)
        document.querySelector(".ImgRendu").src ="img/"+Exemple1.Rendu;
    })

    document.querySelector(".BtnCompDroite").addEventListener("click",function(e){
        e.defaultPrevented;
        NbreComp++;
        if (NbreComp >= TableauComp.length) {
            NbreComp = 0
        }
        ListComp = TableauComp[NbreComp]
        AfficheArriereComp(ListComp)
    })

    document.querySelector(".BtnCompGauche").addEventListener("click",function(e){
        e.defaultPrevented;
        NbreComp--;
        if (NbreComp < 0) {
            NbreComp = TableauComp.length - 1;
        }
        ListComp = TableauComp[NbreComp]
        AfficheArriereComp(ListComp)
    })
})();