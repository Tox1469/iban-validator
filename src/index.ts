const LENGTHS: Record<string, number> = {
  AD:24,AE:23,AL:28,AT:20,AZ:28,BA:20,BE:16,BG:22,BH:22,BR:29,CH:21,CR:22,CY:28,CZ:24,DE:22,DK:18,DO:28,EE:20,
  ES:24,FI:18,FO:18,FR:27,GB:22,GI:23,GL:18,GR:27,GT:28,HR:21,HU:28,IE:22,IL:23,IS:26,IT:27,JO:30,KW:30,KZ:20,
  LB:28,LI:21,LT:20,LU:20,LV:21,MC:27,MD:24,ME:22,MK:19,MR:27,MT:31,MU:30,NL:18,NO:15,PK:24,PL:28,PS:29,PT:25,
  QA:29,RO:24,RS:22,SA:24,SE:24,SI:19,SK:24,SM:27,TN:24,TR:26,UA:29,VG:24,XK:20
};

export function normalizeIban(iban: string): string {
  return iban.replace(/\s+/g, "").toUpperCase();
}

function mod97(s: string): number {
  let rem = 0;
  for (let i = 0; i < s.length; i++) {
    rem = (rem * 10 + parseInt(s[i]!, 10)) % 97;
  }
  return rem;
}

export function validateIban(iban: string): { valid: boolean; country?: string; reason?: string } {
  const n = normalizeIban(iban);
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]+$/.test(n)) return { valid: false, reason: "format" };
  const country = n.slice(0,2);
  const expected = LENGTHS[country];
  if (!expected) return { valid: false, reason: "unknown_country" };
  if (n.length !== expected) return { valid: false, reason: "length" };
  const rearranged = n.slice(4) + n.slice(0,4);
  let numeric = "";
  for (const ch of rearranged) {
    if (ch >= "0" && ch <= "9") numeric += ch;
    else numeric += (ch.charCodeAt(0) - 55).toString();
  }
  const valid = mod97(numeric) === 1;
  return valid ? { valid: true, country } : { valid: false, reason: "checksum" };
}

export function formatIban(iban: string): string {
  return normalizeIban(iban).replace(/(.{4})/g, "$1 ").trim();
}
