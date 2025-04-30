(() => {
  /*
for문
*/

  /*
   *
   **
   ***
   ****
   *****
   */

  const lines: number = 10;

  for (let i = 0; i < lines; i++) {
    let star: string = "";
    for (let k = 0; k <= i; k++) {
      star += "🌟";
    }
    console.log(star);
  }

  /*
   *****
   ****
   ***
   **
   *
   */

  /*
 *****
| ****
|| ***
||| **
|||| *
 */

  for (let i = lines; i >= 1; i--) {
    let star: string = "";
    for (let k = 0; k < i; k++) {
      star += "🌟";
    }
    console.log(star);
  }

  /*
||||*
|||**
||***
|****
*****

 */

  for (let i = 0; i < lines; i++) {
    let space: string = "";
    let star: string = "";
    for (let k = 0; k < lines - i - 1; k++) {
      space += "  ";
    }
    for (let k = 0; k <= i; k++) {
      star += "🌲";
    }
    console.log(space + star);
  }

  for (let i = 0; i < lines; i++) {
    let space: string = "";
    let star: string = "";
    for (let k = 0; k < lines - i - 1; k++) {
      space += "  ";
    }
    for (let k = 0; k <= i; k++) {
      star += "✨";
    }
    console.log(space + star);
  }

  /*
||| *
|| ***
| *****
|| ***
||| *

 */
})();
