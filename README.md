[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/iban-validator/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/iban-validator/actions)
[![License](https://img.shields.io/github/license/Tox1469/iban-validator?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/iban-validator?style=flat-square)](https://github.com/Tox1469/iban-validator/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/iban-validator?style=flat-square)](https://github.com/Tox1469/iban-validator/stargazers)

---

# iban-validator

Validação de IBAN com checagem de formato por país e mod-97.

## Instalação

```bash
npm install iban-validator
```

## Uso

```ts
import { validateIban, formatIban } from "iban-validator";
validateIban("DE89 3704 0044 0532 0130 00");
```

## API

- `validateIban(iban)`
- `normalizeIban(iban)`
- `formatIban(iban)`

## Licença

MIT