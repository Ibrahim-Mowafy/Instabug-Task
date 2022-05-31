<template>
  <div class="card">
    <div class="card__logo">
      <img src="../assets/Instabug-icon.svg" alt="logo" />
    </div>
    <div class="card__title">Log in to Instabug</div>
    <div class="social-buttons">
      <a class="social-buttons__item google-btn">
        <img
          class="social-buttons__item--image"
          src="../assets/google_icon.svg"
          alt="google logo"
        />
        <span class="social-buttons__item--text">Google</span>
      </a>
      <a class="social-buttons__item github-btn">
        <img
          class="social-buttons__item--image"
          src="../assets/google_icon.svg"
          alt="github logo"
        />
        <span class="social-buttons__item--text">GitHub</span>
      </a>
      <a class="social-buttons__item microsoft-btn">
        <img
          class="social-buttons__item--image"
          src="../assets/microsoft_icon.svg"
          alt="microsoft logo"
        />
        <span class="social-buttons__item--text">Microsoft</span>
      </a>
      <span class="divider">OR</span>
    </div>
    <Form @submit="onSubmitForm" class="form" v-slot="{ meta }">
      <div class="error-message" v-if="isLogged">
        Your email and/or password are incorrect
      </div>
      <div class="form-group">
        <label class="form__label" for="email">Work Email</label>
        <Field
          name="email"
          type="email"
          :rules="emailValidate"
          v-slot="{ field, errorMessage, meta }"
        >
          <input
            id="email"
            placeholder="you@company.com"
            class="form__input"
            v-bind="field"
            :class="{ 'form__input-is-invalid': !meta.valid && meta.touched }"
          />
          <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
        </Field>
      </div>
      <div class="form-group">
        <div class="form__label-container">
          <label class="form__label" for="password">Password</label>
          <a class="form__forget-password">Forgot password?</a>
        </div>
        <Field
          name="password"
          type="password"
          :rules="passwordValidate"
          v-slot="{ field, errorMessage, meta }"
        >
          <input
            id="password"
            type="password"
            v-bind="field"
            class="form__input"
            placeholder="8+ Characters"
            :class="{ 'form__input-is-invalid': !meta.valid && meta.touched }"
          />
          <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
        </Field>
      </div>
      <div class="form-action">
        <button :disabled="!meta.valid" class="form-action__btn">Submit</button>
        <div class="form-action__signup">
          <p>
            Don't have an account?
            <a class="form-action__signup--link"> Sign up </a>
          </p>
          <a class="form-action__signup--link">Login via SSO</a>
        </div>
      </div>
    </Form>

    <div class="companies-paragraph">Trusted by the top companies.</div>
    <div class="companies-logos">
      <ul class="companies-logos__list">
        <li class="companies-logos__item">
          <img
            class="companies-logos__item--image"
            src="../assets/google_icon.svg"
            alt="logo"
          />
        </li>
        <li class="companies-logos__item">
          <img
            class="companies-logos__item--image"
            src="../assets/google_icon.svg"
            alt="logo"
          />
        </li>
        <li class="companies-logos__item">
          <img
            class="companies-logos__item--image"
            src="../assets/google_icon.svg"
            alt="logo"
          />
        </li>
        <li class="companies-logos__item">
          <img
            class="companies-logos__item--image"
            src="../assets/google_icon.svg"
            alt="logo"
          />
        </li>
        <li class="companies-logos__item">
          <img
            class="companies-logos__item--image"
            src="../assets/google_icon.svg"
            alt="logo"
          />
        </li>
        <li class="companies-logos__item">
          <img
            class="companies-logos__item--image"
            src="../assets/google_icon.svg"
            alt="logo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { isEmail, isLength } from "validator";

export default {
  components: { Form, Field, ErrorMessage },

  data() {
    return {
      isLogged: false,
      emailName: "",
    };
  },
  methods: {
    onSubmitForm(formValues) {
      console.log(
        "🚀 ~ file: LoginForm.vue ~ line 157 ~ onSubmitForm ~ formValues",
        formValues
      );

      this.login(formValues.email, formValues.password);
    },

    emailValidate(emailValue) {
      if (!emailValue || !emailValue.trim()) {
        return "this field is required";
      }

      if (!isEmail(emailValue)) {
        return "Enter a valid email address.";
      }
      this.emailName = emailValue.split("@")[0];
      console.log(
        "🚀 ~ file: LoginForm.vue ~ line 172 ~ emailValidate ~ emailName",
        this.emailName
      );
      return true;
    },

    passwordValidate(passwordValue) {
      if (!passwordValue || !passwordValue.trim()) {
        return "this field is required";
      }
      if (passwordValue.length < 6) {
        return "password must be six characters or more";
      }

      let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$");
      console.log(regex.test(passwordValue));
      return true;
    },

    login(email, password) {
      const users = [
        { email: "mohamed@instabug.com", password: "A12345678" },
        { email: "mohamed1@instabug.com", password: "A12345678" },
        { email: "mohamed3@instabug.com", password: "A12345678" },
        { email: "mohamed4@instabug.com", password: "A12345678" },
        { email: "mohamed2@instabug.com", password: "A12345678" },
        { email: "mohamed5@instabug.com", password: "A12345678" },
        { email: "mohamed6@instabug.com", password: "A12345678" },
        { email: "mohamed7@instabug.com", password: "A12345678" },
      ];

      for (const user of users) {
        if (email === user.email && password === user.password) {
          localStorage.setItem("LoggedUser", email);
          this.$router.push("/welcome");
          return;
        }
      }
      this.isLogged = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 49%;
  padding-inline: 7rem;
  padding-block: 2rem;
  &__logo,
  &__title {
    text-align: center;
  }
  &__title {
    margin-top: 1rem;
    font-size: 2rem;
  }

  .social-buttons {
    padding-top: 1.8rem;
    padding-bottom: 1.2rem;
    font-weight: 600;
    border-bottom: 1px solid #dcdee3;
    position: relative;
    margin-bottom: 1rem;

    &__item {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 7px;
      padding: 0.3rem;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
      color: #fff;

      &--image {
        height: 40px;
      }
      &--text {
        text-align: center;
        margin: auto;
      }
      &.google-btn {
        background-color: #4285f4;
        color: #fff;

        .social-buttons__item--image {
          background: #fff;
          border-radius: 6px;
        }
      }
      &.github-btn {
        background-color: #333;
        color: #fff;
      }
      &.microsoft-btn {
        border: 1px solid #8c8c8c;
        background-color: #fff;
        color: #5e5e5e;
      }
    }
    .divider {
      position: absolute;
      bottom: 0;
      left: 50%;
      padding-right: 8px;
      padding-left: 8px;
      transform: translateY(50%) translateX(-50%);
      background-color: #f2f4f8;
    }
  }
  .form {
    &-group {
      display: block;
      margin: 0 0 0.25rem 0;
      color: #445065;
      font-size: 0.875rem;
      cursor: pointer;
      margin-bottom: 1rem;
    }

    &__label {
      display: block;
      margin: 0 0 0.25rem 0;
      color: #445065;
      font-size: 0.85rem;
      cursor: pointer;
    }

    &__label-container {
      display: flex;
      justify-content: space-between;
    }

    &__forget-password {
      color: #a6a6a6;
      transition: color 0.3s;
      &:hover {
        color: #0089e5;
      }
    }

    &__input {
      display: block;
      width: 100%;
      height: 40px;
      border: 1px solid #dcdee3;
      border-radius: 4px;
      background-color: #fff;
      color: #445065;
      font-weight: normal;
      font-size: 1rem;
      padding: 0.5rem 0 0.5rem 0.5rem;
      outline: none;
      font-size: 0.85rem;
      font-weight: normal;
      font-family: inherit;

      &-is-invalid {
        border: 1px solid #f24220;
      }

      &:focus {
        border-color: #09f;
        box-shadow: inset 0 0 4px 0 #09f;
      }
    }

    ::placeholder {
      color: #a6a6a6;
    }

    .form-action {
      &__btn {
        width: 100%;
        background-color: #0089e5;
        color: #fff;
        transition: 0.3s;
        cursor: pointer;
        outline: none;
        border: transparent;
        border-radius: 4px;
        font-size: 1rem;
        padding: 0.8rem;
      }

      &__btn:not(:disabled):hover {
        border-color: #09f;
        background-color: #09f;
        color: #fff;
      }

      &__btn:disabled {
        background-color: #ccc;
        color: #fff;
        cursor: not-allowed;
      }

      &__signup {
        display: flex;
        font-size: 0.85rem;
        justify-content: space-between;
        margin-top: 1rem;

        &--link {
          color: #09f;
          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            color: #000;
          }
        }
      }
    }
  }

  .companies-paragraph {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #a1a7b2;
  }

  .companies-logos {
    &__list {
      display: flex;
      list-style: none;
      justify-content: space-between;
    }
    &__item {
      display: flex;

      &--image {
        height: 3rem;
      }
    }
  }

  .error {
    color: #f24220;
    font-size: 0.75rem;
  }

  .error-message {
    background-color: #fce6e2;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    color: #445065;
  }
}
</style>
