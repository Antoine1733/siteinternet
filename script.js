document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("instaEnBoiteHomme").style.display = "none";
    document.getElementById("instaEnBoiteFemme").style.display = "none";
    document.getElementById("chargeurSoiree-question").style.display = "none";
    document.getElementById("quitteSalle-question").style.display = "none";
    document.getElementById("storyPrivee-question").style.display = "none";
    document.getElementById("tatouee-question").style.display = "none";
    document.getElementById("gererAge-question").style.display = "none";
    document.getElementById("teub-question").style.display = "none";
    document.getElementById("habillerSoiree-question").style.display = "none";
    document.getElementById("iphone-question").style.display = "none";
    document.getElementById("voiture-question").style.display = "none";
    document.getElementById("meilleurPote-question").style.display = "none";
    document.getElementById("gender").addEventListener("change", function() {
        const gender = this.value;
        if (gender === "homme") {
            document.getElementById("instaEnBoiteHomme").style.display = "block";
            document.getElementById("instaEnBoiteFemme").style.display = "none";
            document.getElementById("chargeurSoiree-question").style.display = "none";
            document.getElementById("quitteSalle-question").style.display = "block";
            document.getElementById("storyPrivee-question").style.display = "none";
            document.getElementById("tatouee-question").style.display = "none";
            document.getElementById("gererAge-question").style.display = "block";
            document.getElementById("teub-question").style.display = "block";
            document.getElementById("habillerSoiree-question").style.display = "block";
            document.getElementById("iphone-question").style.display = "none";
            document.getElementById("voiture-question").style.display = "block";
            document.getElementById("meilleurPote-question").style.display = "block";
        } else if (gender === "femme") {
            document.getElementById("instaEnBoiteHomme").style.display = "none";
            document.getElementById("instaEnBoiteFemme").style.display = "block";
            document.getElementById("chargeurSoiree-question").style.display = "block";
            document.getElementById("quitteSalle-question").style.display = "none";
            document.getElementById("storyPrivee-question").style.display = "block";
            document.getElementById("tatouee-question").style.display = "block";
            document.getElementById("gererAge-question").style.display = "none";
            document.getElementById("teub-question").style.display = "none";
            document.getElementById("habillerSoiree-question").style.display = "none";
            document.getElementById("iphone-question").style.display = "block";
            document.getElementById("voiture-question").style.display = "none";
            document.getElementById("meilleurPote-question").style.display = "none";
        } else {
            document.getElementById("instaEnBoiteHomme").style.display = "none";
            document.getElementById("instaEnBoiteFemme").style.display = "none";
            document.getElementById("chargeurSoiree-question").style.display = "none";
            document.getElementById("quitteSalle-question").style.display = "none";
            document.getElementById("storyPrivee-question").style.display = "none";
            document.getElementById("tatouee-question").style.display = "none";
            document.getElementById("gererAge-question").style.display = "none";
            document.getElementById("teub-question").style.display = "none";
            document.getElementById("habillerSoiree-question").style.display = "none";
            document.getElementById("iphone-question").style.display = "none";
            document.getElementById("voiture-question").style.display = "none";
            document.getElementById("meilleurPote-question").style.display = "none";
        }
    });
});

function resetForm() {
    document.getElementById("questionnaire").reset();
    const results = document.querySelectorAll('p[id$="-result"]');
    results.forEach(result => result.innerHTML = "");
    document.getElementById("instaEnBoiteHomme").style.display = "none";
    document.getElementById("instaEnBoiteFemme").style.display = "none";
    document.getElementById("chargeurSoiree-question").style.display = "none";
    document.getElementById("quitteSalle-question").style.display = "none";
    document.getElementById("storyPrivee-question").style.display = "none";
    document.getElementById("tatouee-question").style.display = "none";
    document.getElementById("gererAge-question").style.display = "none";
    document.getElementById("teub-question").style.display = "none";
    document.getElementById("habillerSoiree-question").style.display = "none";
    document.getElementById("iphone-question").style.display = "none";
    document.getElementById("voiture-question").style.display = "none";
    document.getElementById("meilleurPote-question").style.display = "none";
}

function showResult(id) {
    const gender = document.getElementById("gender").value;
    let resultText = "";

    if (id === "tatouee") {
        const tatouee = document.getElementById("tatouee").value;
        if (tatouee === "oui") {
            resultText = "Tu es tatouée ? Alors tu n'es plus vierge.";
        }
        document.getElementById("tatouee-result").innerHTML = resultText;
    }

    if (id === "pieteGentillesse") {
        const pieteGentillesse = document.getElementById("pieteGentillesse").value;
        if (pieteGentillesse === "oui") {
            resultText = "Si la fille/mec a de la pitié et de la gentillesse pour toi, il/elle ne voudra pas te pécho.";
        }
        document.getElementById("pieteGentillesse-result").innerHTML = resultText;
    }

    if (id === "age") {
        const age = document.getElementById("age").value;
        if (age === "oui") {
            resultText = "Passé 20 ans, le physique ne joue plus rien, c'est uniquement la tchatche et ce que la personne possède ou représente.";
        }
        document.getElementById("age-result").innerHTML = resultText;
    }

    if (id === "gererAge") {
        const gererAge = document.getElementById("gererAge").value;
        if (gererAge === "oui") {
            resultText = "Les gars qui gèrent des meufs de 3 ans de moins ne peuvent pas gérer des meufs de leur âge et se rabattent sur des plus jeunes.";
        }
        document.getElementById("gererAge-result").innerHTML = resultText;
    }

    if (id === "teub") {
        const teub = document.getElementById("teub").value;
        if (teub) {
            resultText = "Peu importe la taille de ta teub, personne n'a une teub inférieure à la moyenne, alors que mathématiquement il y en a forcément sous la moyenne.";
        }
        document.getElementById("teub-result").innerHTML = resultText;
    }

    if (id === "habillerSoiree") {
        const habillerSoiree = document.getElementById("habillerSoiree").value;
        if (habillerSoiree === "oui") {
            resultText = "Tu as fait super gaffe pour t'habiller en soirée ? Tu ne choperas rien du tout ce soir.";
        }
        document.getElementById("habillerSoiree-result").innerHTML = resultText;
    }

    if (id === "capotesSoiree") {
        const capotesSoiree = document.getElementById("capotesSoiree").value;
        if (capotesSoiree === "oui") {
            resultText = "Tu as apporté des capotes en soirée ? Tu n'auras aucun bail ce soir.";
        }
        document.getElementById("capotesSoiree-result").innerHTML = resultText;
    }

    if (id === "iphone") {
        const iphone = document.getElementById("iphone").value;
        if (iphone === "oui") {
            resultText = "Tu as un iPhone ? Alors tu es possiblement fraîche.";
        }
        document.getElementById("iphone-result").innerHTML = resultText;
    }

    if (id === "musees") {
        const musees = document.getElementById("musees").value;
        if (musees === "oui") {
            resultText = "Le taux de meufs fraîches dans les musées est immensément plus grand que la normale.";
        }
        document.getElementById("musees-result").innerHTML = resultText;
    }

    if (id === "cherchePas") {
        const cherchePas = document.getElementById("cherchePas").value;
        if (cherchePas === "oui") {
            resultText = "Tu trouves aucune meuf/mec en cherchant, tu trouves uniquement quand tu cherches pas et que tu ne t'y attends pas, et à un moment qui n'est pas commode.";
        }
        document.getElementById("cherchePas-result").innerHTML = resultText;
    }

    if (id === "ex2ans") {
        const ex2ans = document.getElementById("ex2ans").value;
        if (ex2ans === "oui") {
            resultText = "L'ex de ta meuf/mec d'une durée de plus de 2 ans devient véhicule prioritaire et peut se garer devant toi même si tu es avec ta meuf depuis plusieurs mois.";
        }
        document.getElementById("ex2ans-result").innerHTML = resultText;
    }

    if (id === "presidentBDE") {
        const presidentBDE = document.getElementById("presidentBDE").value;
        if (presidentBDE === "oui") {
            resultText = "Tu es président du BDE ? C'est un joker.";
        }
        document.getElementById("presidentBDE-result").innerHTML = resultText;
    }

    if (id === "fumais5eme") {
        const fumais5eme = document.getElementById("fumais5eme").value;
        if (fumais5eme === "oui" && gender === "femme") {
            resultText = "Tu fumais en 5ème ? Alors tu travailles aujourd'hui en manucure ou encore assistante maternelle.";
        } else if (fumais5eme === "oui" && gender === "homme") {
            resultText = "Tu fumais en 5ème ? Alors tu es aujourd'hui à découvert de 650€ sur ton compte à cause du bitcoin.";
        }
        document.getElementById("fumais5eme-result").innerHTML = resultText;
    }

    if (id === "conversationRelance") {
        const conversationRelance = document.getElementById("conversationRelance").value;
        if (conversationRelance === "oui") {
            resultText = "Tu as relancé 3 fois la conversation sans réponse ? 3-0, passe la manette.";
        }
        document.getElementById("conversationRelance-result").innerHTML = resultText;
    }

    if (id === "relationLibre") {
        const relationLibre = document.getElementById("relationLibre").value;
        if (relationLibre === "oui") {
            resultText = "Dans les couples libres, il y en a toujours un bien plus libre que l'autre.";
        }
        document.getElementById("relationLibre-result").innerHTML = resultText;
    }

    if (id === "relationLibreSentiment") {
        const relationLibreSentiment = document.getElementById("relationLibreSentiment").value;
        if (relationLibreSentiment === "oui") {
            resultText = "Dans les couples libres, il y en a toujours un bien plus libre que l'autre.";
        }
        document.getElementById("relationLibreSentiment-result").innerHTML = resultText;
    }

    if (id === "possedeAppartement") {
        const possedeAppartement = document.getElementById("possedeAppartement").value;
        if (possedeAppartement === "oui") {
            resultText = "Un mec moche qui a un appart baise plus qu'un mec beau.";
        }
        document.getElementById("possedeAppartement-result").innerHTML = resultText;
    }

    if (id === "utiliseInstagram") {
        const utiliseInstagram = document.getElementById("utiliseInstagram").value;
        if (utiliseInstagram === "oui" && gender === "homme") {
            resultText = "Prendre l'insta d'une fille en boîte sert à rien, elle n'a pas voulu de toi tisée, elle ne va pas se déplacer pour toi le lendemain.";
        } else if (utiliseInstagram === "oui" && gender === "femme") {
            resultText = "Prendre l'insta d'un mec en boîte sert à rien, il n'a pas voulu de toi tisé, il ne va pas se déplacer pour toi le lendemain.";
        }
        document.getElementById("utiliseInstagram-result").innerHTML = resultText;
    }

    if (id === "prisInstaEnBoiteHomme") {
        const prisInstaEnBoiteHomme = document.getElementById("prisInstaEnBoiteHomme").value;
        if (prisInstaEnBoiteHomme === "oui") {
            resultText = "Prendre l'insta d'une fille en boîte sert à rien, elle n'a pas voulu de toi tisée, elle ne va pas se déplacer pour toi le lendemain.";
        }
        document.getElementById("prisInstaEnBoiteHomme-result").innerHTML = resultText;
    }

    if (id === "prisInstaEnBoiteFemme") {
        const prisInstaEnBoiteFemme = document.getElementById("prisInstaEnBoiteFemme").value;
        if (prisInstaEnBoiteFemme === "oui") {
            resultText = "Prendre l'insta d'un mec en boîte sert à rien, il n'a pas voulu de toi tisé, il ne va pas se déplacer pour toi le lendemain.";
        }
        document.getElementById("prisInstaEnBoiteFemme-result").innerHTML = resultText;
    }

    if (id === "snapScore") {
        const snapScore = document.getElementById("snapScore").value;
        if (snapScore === "oui") {
            resultText = "Son score snap augmente après qu'elle t'ait dit bonne nuit ? Alors tu es officiellement remplaçant.";
        }
        document.getElementById("snapScore-result").innerHTML = resultText;
    }

    if (id === "chatelet") {
        const chatelet = document.getElementById("chatelet").value;
        if (chatelet === "oui") {
            resultText = "Ton date te donne rendez-vous à Châtelet ? Il ne compte pas se mettre en couple avec toi.";
        }
        document.getElementById("chatelet-result").innerHTML = resultText;
    }

    if (id === "chicha") {
        const chicha = document.getElementById("chicha").value;
        if (chicha === "oui") {
            resultText = "Aucun date dans une chicha n'a mené à une relation sérieuse de plus de 6 mois.";
        }
        document.getElementById("chicha-result").innerHTML = resultText;
    }

    if (id === "voiture") {
        const voiture = document.getElementById("voiture").value;
        if (voiture === "oui") {
            resultText = "Un gars avec une voiture gère plus qu'un gars avec un Navigo.";
        }
        document.getElementById("voiture-result").innerHTML = resultText;
    }

    if (id === "meilleurPote") {
        const meilleurPote = document.getElementById("meilleurPote").value;
        if (meilleurPote === "oui") {
            resultText = "Le meilleur pote de ta meuf est simplement un gars qui n'a pas réussi à la gérer.";
        }
        document.getElementById("meilleurPote-result").innerHTML = resultText;
    }

    if (id === "flirtPotes") {
        const flirtPotes = document.getElementById("flirtPotes").value;
        if (flirtPotes === "oui") {
            resultText = "Si tu es en flirt avec quelqu'un, n'en parle pas à tes potes, sinon il ne se passera rien.";
        }
        document.getElementById("flirtPotes-result").innerHTML = resultText;
    }

    if (id === "bloques") {
        const bloques = document.getElementById("bloques").value;
        if (bloques === "oui" || bloques === "non") {
            resultText = "Parfois les titulaires sont dans les bloqués, pas dans les abonnés.";
        }
        document.getElementById("bloques-result").innerHTML = resultText;
    }

    if (id === "chargeurSoiree") {
        const chargeurSoiree = document.getElementById("chargeurSoiree").value;
        if (chargeurSoiree === "oui") {
            resultText = "Un mec en soirée t'a proposé de l'accompagner pour aller chercher son chargeur à l'étage ? Il a probablement 80% de batterie.";
        }
        document.getElementById("chargeurSoiree-result").innerHTML = resultText;
    }

    if (id === "quitteSalle") {
        const quitteSalle = document.getElementById("quitteSalle").value;
        if (quitteSalle === "oui") {
            resultText = "Tu t'es fait quitter ? Alors tu vas à la salle.";
        }
        document.getElementById("quitteSalle-result").innerHTML = resultText;
    }

    if (id === "storyPrivee") {
        const storyPrivee = document.getElementById("storyPrivee").value;
        if (storyPrivee === "oui" && gender === "femme") {
            resultText = "Tu l'as ajouté en story privée ? Tu l'as officiellement friend zone.";
        } else if (storyPrivee === "oui" && gender === "homme") {
            resultText = "Elle t'a ajouté en story privée ? Elle t'a friendzone.";
        }
        document.getElementById("storyPrivee-result").innerHTML = resultText;
    }

    if (id === "bugLocalisation") {
        const bugLocalisation = document.getElementById("bugLocalisation").value;
        if (bugLocalisation === "oui") {
            resultText = "La localisation de ta meuf/mec bug tous les soirs à la même heure ? C'est un bug, ce sera corrigé dans la prochaine MAJ.";
        }
        document.getElementById("bugLocalisation-result").innerHTML = resultText;
    }
}
