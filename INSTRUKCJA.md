# Jak działa strona

- Hosting: Cloudflare Pages, połączone z tym repozytorium. Każda zmiana w gałęzi `main` sama trafia na stronę.
- Domena: pilateswdomukrk.pl (kupiona w OVH, DNS w Cloudflare).
- Formularz rezerwacji: Web3Forms. Rezerwacje przychodzą mailem na adres podany przy zakładaniu klucza.

## Podpięcie w Cloudflare Pages (jednorazowo)
1. Cloudflare → Compute (Workers & Pages) → Create → zakładka Pages → Connect to Git.
2. Wybierz repozytorium `pilatesWdomuKrk`.
3. Framework preset: None. Build command: puste. Output directory: `/`.
4. Save and Deploy. Dostaniesz adres `….pages.dev`.
5. W projekcie: Custom domains → Set up a custom domain → `pilateswdomukrk.pl` (i osobno `www.pilateswdomukrk.pl`). Jeśli Cloudflare zgłosi konflikt ze starymi rekordami A (213.186.33.5), usuń je w DNS → Records.

## Do uzupełnienia w index.html
Ceny, kaucja, telefon, e-mail, model i wymiary reformera (pola [XXX], [TELEFON], [EMAIL]) oraz zdjęcie (`reformer.jpg`).

## Analityka (opcjonalnie)
Cloudflare → Analytics & Logs → Web Analytics: darmowe statystyki bez cookies, włącza się jednym kliknięciem dla domeny.
