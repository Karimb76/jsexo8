
document.getElementById('submit').addEventListener('click', function(){
  var age = document.getElementById('age').value;

  if (age >= 18) // Si l'âge est supérieur ou égal à 18

  {

    alert ("Vous etes majeur !");

  }

  else // Sinon...

  {

    alert ("Ah c'est bete, vous etes mineur !");

  }
}
)
