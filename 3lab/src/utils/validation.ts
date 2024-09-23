export class Validation {
  private static instance: Validation;

  private constructor() {}

  private readonly validaEmailRegExp: RegExp = new RegExp(
    "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
  );
  private readonly validReleaseYearRegExp: RegExp = new RegExp(
    "^(0|[1-9][0-9]{0,3})$",
  );

  validateCreateBookRequest(
    bookName: string,
    author: string,
    releaseYear: number,
  ): boolean {
    if (
      !bookName ||
      !author ||
      !releaseYear ||
      !this.validReleaseYearRegExp.test(releaseYear.toString())
    ) {
      return false;
    }
    return true;
  }

  validateCreateUserRequest(username: string, email: string): boolean {
    if (!username || !email || !this.validaEmailRegExp.test(email)) {
      return false;
    }
    return true;
  }

  static getInstance() {
    if (!Validation.instance) {
      Validation.instance = new Validation();
    }

    return Validation.instance;
  }
}

// validateBookValues(bookName: string, author: string, releaseYear: number): boolean {
//     if (!bookName.trim() || !author.trim() || !this.validReleaseYearRegExp.test(releaseYear.toString())) {
//         return false;
//     }
//     return true;
// }
// validateUserValues(username: string, email: string): boolean {
//     if (!username.trim() || !this.validaEmailRegExp.test(email)) {
//         return false;
//     }
//     return true;
// }

// validateCreateBookRequest(bookNameInput: HTMLInputElement, authorInput: HTMLInputElement, releaseYearInput: HTMLInputElement): boolean {
//     let isValid = true;

//     if (!bookNameInput.value.trim()) {
//         bookNameInput.classList.add("is-invalid");
//         isValid = false;
//     } else {
//         bookNameInput.classList.remove("is-invalid");
//         bookNameInput.classList.add("is-valid");
//     }

//     if (!authorInput.value.trim()) {
//         authorInput.classList.add("is-invalid");
//         isValid = false;
//     } else {
//         authorInput.classList.remove("is-invalid");
//         authorInput.classList.add("is-valid");
//     }

//     if (!releaseYearInput.value.trim() || !this.validReleaseYearRegExp.test(releaseYearInput.value)) {
//         releaseYearInput.classList.add("is-invalid");
//         isValid = false;
//     } else {
//         releaseYearInput.classList.remove("is-invalid");
//         releaseYearInput.classList.add("is-valid");
//     }

//     return isValid;
// }

// validateCreateUserRequest(usernameInput: HTMLInputElement, emailInput: HTMLInputElement): boolean {
//     let isValid = true;

//     if (!usernameInput.value.trim()) {
//         usernameInput.classList.add("is-invalid");
//         isValid = false;
//     } else {
//         usernameInput.classList.remove("is-invalid");
//         usernameInput.classList.add("is-valid");
//     }

//     if (!emailInput.value.trim() || !this.validaEmailRegExp.test(emailInput.value)) {
//         emailInput.classList.add("is-invalid");
//         isValid = false;
//     } else {
//         emailInput.classList.remove("is-invalid");
//         emailInput.classList.add("is-valid");
//     }

//     return isValid;
// }
