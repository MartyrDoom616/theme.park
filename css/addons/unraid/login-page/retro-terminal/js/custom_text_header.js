
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>_______     __                             __  ___         ___      
 /_  __(_)___/ /___ ___  ____  ________     /  |/  /__  ____/ (_)___ _
  / / / / __  / __ \`__ \\/ __ \\/ ___/ _ \\   / /|_/ / _ \\/ __  / / __ \`/
 / / / / /_/ / / / / / / / /_/ / /  /  __/  / /  / /  __/ /_/ / / /_/ / 
/_/ /_/\\__,_/_/ /_/ /_/\\____/_/   \\___/  /_/  /_/\\___/\\__,_/_/\\__,_/
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
