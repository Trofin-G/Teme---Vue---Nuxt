/*
----------------------------------------------------------------------
   Variabile
----------------------------------------------------------------------
Variabilele depoziteaza date temporare in memoria computerului.
Exista 3 tipuri de variabile: var, let si const ( din care var nu se mai foloseste ).

Cu var se definesc variablie globale, adica variabile care se pot modifica in alte sectiuni din cod
sau locale, valabile in corpul functiilor.
Iar let permite definirea de variabile care sunt limitate la sectiune, adica se pot modifica sau
apela doar in expresia unde au fost definite/declarate.

Diferente intre "let" si "const":
- Valoarea unei variabile declarate cu "let" se poate schimba pe parcurs
- Valoarea unei variabile declarate cu "const"  nu se schimba ("const" e alegerea principala in cazul in care nu trebuie sa schimbam valoarea variabilei)
Denumirea variabilei trebuie:
- Sa nu fie un cuvant rezervat ( Ex: let, const, etc )
- Sa aiba sens
- Nu poate incepe cu un numar
- Nu poate sa contina spatiu intre cuvinte
- Se declara cate o variabila pe linie


----------------------------------------------------------------------
   Types	
----------------------------------------------------------------------
1. String Literal
let name = "Trofin"; 

2. Number Literal
let age = 30; 

3. Boolean Literal
let isApproved = false;

4. Undefined
let firstName = undefined;
let firstName; 

5. Null
let selectedColor= null; 

Folosim null ca un punct neutru. Ex: cand persoana selecteaza rosu valoarea var. este "rosu", iar daca deselecteaza valoarea var. este "null".


----------------------------------------------------------------------
   Logical Operators with non-booleans
----------------------------------------------------------------------
FALSY: undefined, null, 0, false, " ", NaN
TRUTHY: Orice nu e Falsy e Truthy.


----------------------------------------------------------------------
   Ternary Operators
----------------------------------------------------------------------
Practic este o scurtatura a statement-ului if.

let points = 100;
let type = points >= 100 ? 'gold' : 'silver';

type - o variabila care reprezinta tipul cumparatorului
points >= 100 - reprezinta conditia
	? - este if-ul, daca este true foloseste primul argument
	: - daca este false foloseste al 2-lea argument 


----------------------------------------------------------------------
   Diferenta dintre == si ===
----------------------------------------------------------------------
== adica lose equality trebuie sa aiba doar valoarea egala, iar tipul variabilei se va converti
automat
=== adica strict equality trebuie sa aiba acelasi tip si aceasi valoare ca sa fie egale.




----------------------------------------------------------------------
   Ce este un Array ?
----------------------------------------------------------------------
Un Array este o structura care reprezinta o lista de iteme/obiecte. ( Listele de objects se
depoziteaza intr-un Array ).
Fiecare element din array are un index, care semnifica pozitia elementului. ( incepand cu indexul 0 ).


----------------------------------------------------------------------
   Ce este o functie ?
----------------------------------------------------------------------
Este unul din blocurile fundamentale din Javascript. Adica este un statement care face un task
sau calculeaza o valoare.


----------------------------------------------------------------------
   Ce este un object?
----------------------------------------------------------------------
Obiectul este o entitate/tip de data in JavaScript. Obiectul are o serie de proprietati ce pot fi modificate.
Un object este ca un object din viata reala, adica un exemplu ar fi o persoana, are nume, varsta,
etc, fiind alcatuit din variabilele caracteristice lui.

Pentru a schimba valoarea unei variabile din object folosim: Dot notation sau bracket notation.
Dot notation - person.name = "Alin";
Bracket notation - person['name'] = "Alin;

----------------------------------------------------------------------
   Loops
----------------------------------------------------------------------
Loops ne ajuta sa facem un task, o cerinta, etc in mod repetat.

In js sunt mai multe tipuri de loops: For, While, do...while, for...in, for...of, forEach, etc
Exemplu de loop:
for(initialExpresion; codition; incremetExpresion ){  }
for(let i=0; i<5; i++){ console.log(`${i}`); }


----------------------------------------------------------------------
   Diferenta dintre Arrow function si Normal function
----------------------------------------------------------------------
Pai arrow function nu are constructor si este o functie anonima, iar functia normala dupa ce a
fost declarata o sa fie automat dusa sus si apoi vor fi luate restul.
Functia normala poate fi instantiata, iar arrow function nu poate fi din cauza hoisting-ului


----------------------------------------------------------------------
   Copierea unui object in alt object
----------------------------------------------------------------------
- folosim spreed operator
- object.assign
- iterem prin propietatile primului object si le punem in al 2-lea



----------------------------------------------------------------------
   Ce este DOM?
----------------------------------------------------------------------
DOM = Document Object Model

Este o reprezentare a documentelor HTML. 
DOM permite JS-ului sa acceseze elemente HTML si style-uri pentru a le manipula.


----------------------------------------------------------------------
   Javascript engine
----------------------------------------------------------------------
Un program care executa javascript code. Fiecare browser are propriul js engine. Cel mai cunoscut fiind Google's V-Eight (folosit la Google Chrome).

Js engine mereu contine call stack si un heap. Call stack este locul unde este executat codul nostru, iar the heap este un unstrctured memory pool unde se afla toate obiectele de care are nevoie aplicatia noastra.


----------------------------------------------------------------------
   Call stack
----------------------------------------------------------------------
Este locul unde contextul de execuție se aduna unul peste altul, cu scopul de tine evidenta unde suntem in executarea programelor. 
Contextul de execuție care e primul in stack este cel care ruleaza in prezent. Dupa ce acesta este terminat, este scos din stack si executia se duce la contextul de executie anterior.


----------------------------------------------------------------------
   Javascript thread
----------------------------------------------------------------------
Javascript are un singur thread de executie, adica poate lucra cu un singur lucru pe rand.


----------------------------------------------------------------------
   Ce este un closure? 
----------------------------------------------------------------------
Closure este combinația dintre o funcție și lexical environment în care a fost declarată acea
funcție. Practic un closure este atunci cand o functie interna are acces la variabilele si proprietatile
functiei sale externe.
Un exemplu de closure folosit in JS este setTimeOut()


----------------------------------------------------------------------
   Lexical scope
----------------------------------------------------------------------
Este atunci cand o variabiala care e definite in afara functiei ( domeniului de aplicare ), este
automat inclusa/accesibila in functie ( scope ), daca funtia este definita dupa declararea variabilei.
In iar sensul opus, adica o variabila definita in interiorul functiei nu va fi accesibila in exteriorul ei.


----------------------------------------------------------------------
   Ce este this? 
----------------------------------------------------------------------
Valoare lui THIS este determinata dupa modul cum o functie este apelata. Daca apelam
o functie ca o metoda intr-un obiect, va returna mereu o referinta a acelui obiect.

Daca apelam o functie ca stand alone object sau in afara obiectului, aceasta va returna mereu
obiectul global, care e window object in browsere.

In JavaScript va arata obiectul global, dar in React.js va arata undefined deoarece React are strict
mode* = True.
Cu metoda bind putem seta valoare lui THIS permanent. Setam bind la acea functie (walk) si
obtinem o noua functie (walk) in care valoare se bazeaza pe parametrul setat in metoda bind.


----------------------------------------------------------------------
   Copierea unui object in alt object
----------------------------------------------------------------------
- folosim spreed operator
- object.assign
- iterem prin propietatile primului object si le punem in al 2-lea


----------------------------------------------------------------------
   Spreed operator
----------------------------------------------------------------------
Folosim spreed operator ca sa extindem un array in elemente individuale.


----------------------------------------------------------------------
   Rest pattern
----------------------------------------------------------------------
Rest pattern foloseste aceasi sintaxa ca si spreed operator, dar el colecteaza mai multe elemente si le adauga intr-un array.
Rest element trebuie sa fie mereu ultimul.
Exemplu: const [r, q, ...others] = [1, 2, 3, 4, 5];


----------------------------------------------------------------------
   Diferenta dintre Spreed operator si Rest pattern
----------------------------------------------------------------------
- Spreed operator se afla in partea drapta (dupa egal), iar Rest pattern se afla in partea stanga (inainte de egal).


----------------------------------------------------------------------
   Destructuring
----------------------------------------------------------------------
Este o madalitate de a despacheta un array sau un obiect in variabile separate. 
Ne ajuta sa extragem valorile din fiecare parametru si sa le stocam in variabile separate mult
mai simplu si fara a fi repetitive.


----------------------------------------------------------------------
   Logical operators: &&    ||    ?? folositi in "Short Circuiting"
----------------------------------------------------------------------
- pot folosi orice data-type;
- pot returna orice data-type;
- pot folosi short-circuiting;

Operatorul || va returna prima valoare truthy sau ultima valoare daca toate valorile sunt falsy.
Exemple: console.log(3 || 'Jonas' || 'Hello');  --> returneaza 3 pentru ca este prima valoare truthy

Operatorul && va returna prima valoare falsy sau ultima valoare daca toate valorile sunt truthy.
Exemple: console.log('Hello' && 23 || null);  --> returneaza null pentru ca este prima valoare falsy

Operatorul ?? (Nullish Coalescing operator) e asemanator ca operatorul ||, doar ca acesta va returna prima valoare nullish.
Nullish values: null si undefined
Exemeple:	restaurant.numGuests = 0;
          	const guestCorrect = restaurant.numGuests ?? 10; --> va return 0


----------------------------------------------------------------------
   Logical Assignment Operators: &&=    ||=    ??=
----------------------------------------------------------------------
Operatorul ||= asigneaza o valoare unei variabile doar atunci cand acea variabila este falsy.

Operatorul ??= asigneaza o valoare unei variabile doar atunci cand acea variabila este nullish (adica null sau undefined).

Operatorul &&= asigneaza o valoare unei variabile doar atunci cand acea variabila este truthy.


----------------------------------------------------------------------
   For of loop
----------------------------------------------------------------------
Il folosim ca sa iteram peste prop. unui Array.

Exemplu:
const colors = ['red', 'green', 'blue'];
for(let variabila of colors)
console.log(variabila);


----------------------------------------------------------------------
   For...in loop
----------------------------------------------------------------------
Il folosim ca sa iteram peste prop. unui Object.

Exemplu:
const person = {
	name: 'Gabi',
	age: 23
}
for (let key in person)
console.log(key, person[key]);


----------------------------------------------------------------------
   Diferenta dintre For.. in loop si For.. of loop
----------------------------------------------------------------------
Pai For.. in loop il folosim ca sa iteram printr-un object, pe cand For.. of loop il folosim ca sa
interam printr-un array. 


----------------------------------------------------------------------
   Ce inseamna pure function ?
----------------------------------------------------------------------
Practic e asemanator cu un dummy component, adica daca avem o functie si orice parametru ar
primi ea returneaza acelasi tip de data, adica pentru acelasi input returneaza acelasi output. ( primeste
string returneaza string, primeste numar returneaza numar ).


----------------------------------------------------------------------
   Ce e un dummy component ?
----------------------------------------------------------------------
E o componenta simpla care are doar un html ce afiseaza ceva, un numar, un string, fara ca
componenta sa aiba prea multa logica. 


----------------------------------------------------------------------
   Diferenta dintre forEach() si map()
----------------------------------------------------------------------
- forEach face cam aceasi chestie ca si map(), doar ca nu returneaza nimic ( ex: salvarea
elementelor in baza de date ).
- Pe cand map() returneaza ceva ( ex: transformarea unei liste de siruri in majuscule ).

*/
