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
