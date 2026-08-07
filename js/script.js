const STRINGS = {
  en: {
    tie:        'Tie — no clear winner',
    vA:         'Version A (Control) leads',
    vB:         'Version B (Variant) leads',
    empty:      'Please input the required data above',
    awaitDesc:  'Enter your data',
    higherRate: p => `${p}% higher conversion rate`,
    lowerRate:  p => `${p}% lower conversion rate`,
    equalRate:  'Same conversion rate',
    tsigYes:    () => 'Reliable',
    tsigNo:     () => 'Not reliable',
    whoA:       'Version A (Control) has a higher conversion rate.',
    whoB:       'Version B (Variant) has a higher conversion rate.',
    whoTie:     'Both versions have the same conversion rate.',
    rowSig: (c, chance, who) =>
      `At ${c}% confidence, there is only a ${chance}% chance this difference happened by chance. Your results are strong enough to act on. ${who}`,
    rowNot: (c, chance) =>
      `At ${c}% confidence, there is still a ${chance}% chance this difference happened by chance. Collect more data before deciding.`,
    resultLeadA: 'Version A performs better.',
    resultLeadB: 'Version B performs better.',
    resultTie: 'Both versions perform equally.',
    resultSignificant: pValue => `The difference is statistically significant at 95% confidence (p-value ${pValue}).`,
    resultNotSignificant: pValue => `The difference is not statistically significant at 95% confidence (p-value ${pValue}).`,
    resultUnavailable: 'Statistical significance cannot be calculated from these values.',
    resultSummary: (outcome, rateA, rateB, significance) =>
      `${outcome} Version A converts at ${rateA}; Version B at ${rateB}. ${significance}`,
    fields: {
      visA:  'Number of visitors for Version A',
      convA: 'Number of conversions for Version A',
      visB:  'Number of visitors for Version B',
      convB: 'Number of conversions for Version B',
    },
    errors: {
      requiredVisitors: field => `${field} is required. Enter a whole number greater than zero.`,
      requiredConversions: field => `${field} is required. Enter a whole number equal to or greater than zero.`,
      numberVisitors: field => `${field} must be a valid number. Enter a whole number greater than zero.`,
      numberConversions: field => `${field} must be a valid number. Enter a whole number equal to or greater than zero.`,
      wholeVisitors: field => `${field} must be a whole number greater than zero; decimals are not accepted.`,
      wholeConversions: field => `${field} must be a whole number equal to or greater than zero; decimals are not accepted.`,
      positiveVisitors: field => `${field} must be greater than zero.`,
      nonNegativeConversions: field => `${field} must be equal to or greater than zero.`,
      tooLarge: field => `${field} is too large. Enter a whole number no greater than 9,007,199,254,740,991.`,
      exceedsVisitors: (conversions, visitors) => `${conversions} cannot exceed ${visitors}.`,
    },
    validationSummary: errors => `${errors.length} input error${errors.length === 1 ? '' : 's'}. ${errors.join(' ')}`,
    rec:   { 80:'Quick or low-stakes tests', 90:'Most routine A/B tests', 95:'Important decisions', 99:'High-impact or high-risk changes' },
    guide: {
      80: 'You accept a 20% chance the result is random. Good for fast, directional tests where the cost of being wrong is low.',
      90: 'A reliable balance of speed and confidence. A common choice for everyday experiments.',
      95: 'The standard for most web experiments. Only a 5% chance the result is due to chance.',
      99: 'Use when a wrong decision would be costly or hard to reverse. Requires more data to reach this threshold.',
    },
  },
  fr: {
    fields: {
      visA:  'Le nombre de visiteurs de la version A',
      convA: 'Le nombre de conversions de la version A',
      visB:  'Le nombre de visiteurs de la version B',
      convB: 'Le nombre de conversions de la version B',
    },
    errors: {
      requiredVisitors: field => `${field} est obligatoire. Saisissez un nombre entier supérieur à zéro.`,
      requiredConversions: field => `${field} est obligatoire. Saisissez un nombre entier supérieur ou égal à zéro.`,
      numberVisitors: field => `${field} doit être un nombre valide. Saisissez un nombre entier supérieur à zéro.`,
      numberConversions: field => `${field} doit être un nombre valide. Saisissez un nombre entier supérieur ou égal à zéro.`,
      wholeVisitors: field => `${field} doit être un nombre entier supérieur à zéro; les décimales ne sont pas acceptées.`,
      wholeConversions: field => `${field} doit être un nombre entier supérieur ou égal à zéro; les décimales ne sont pas acceptées.`,
      positiveVisitors: field => `${field} doit être supérieur à zéro.`,
      nonNegativeConversions: field => `${field} doit être supérieur ou égal à zéro.`,
      tooLarge: field => `${field} est trop grand. Saisissez un nombre entier ne dépassant pas 9 007 199 254 740 991.`,
      exceedsVisitors: (conversions, visitors) => `${conversions} ne peut pas dépasser ${visitors}.`,
    },
    validationSummary: errors => `${errors.length} erreur${errors.length === 1 ? '' : 's'} de saisie. ${errors.join(' ')}`,
    tie:        'Égalité — pas de gagnant clair',
    vA:         'Version A (Témoin) en tête',
    vB:         'Version B (Variante) en tête',
    empty:      'Veuillez saisir les données requises ci-dessus',
    awaitDesc:  'Entrez vos données',
    higherRate: p => `Taux de conversion ${p} % plus élevé`,
    lowerRate:  p => `Taux de conversion ${p} % plus bas`,
    equalRate:  'Même taux de conversion',
    tsigYes:    () => 'Fiable',
    tsigNo:     () => 'Non fiable',
    whoA:       'La version A (Témoin) a un taux de conversion plus élevé.',
    whoB:       'La version B (Variante) a un taux de conversion plus élevé.',
    whoTie:     'Les deux versions ont le même taux de conversion.',
    rowSig: (c, chance, who) =>
      `À ${c} % de confiance, il n'y a que ${chance} % de chance que cette différence soit due au hasard. Vos résultats sont fiables. ${who}`,
    rowNot: (c, chance) =>
      `À ${c} % de confiance, il y a encore ${chance} % de chance que cette différence soit due au hasard. Collectez plus de données avant de décider.`,
    resultLeadA: 'La version A est plus performante.',
    resultLeadB: 'La version B est plus performante.',
    resultTie: 'Les deux versions sont aussi performantes.',
    resultSignificant: pValue => `La différence est statistiquement significative au niveau de confiance de 95 % (valeur p : ${pValue}).`,
    resultNotSignificant: pValue => `La différence n’est pas statistiquement significative au niveau de confiance de 95 % (valeur p : ${pValue}).`,
    resultUnavailable: 'La signification statistique ne peut pas être calculée à partir de ces valeurs.',
    resultSummary: (outcome, rateA, rateB, significance) =>
      `${outcome} Le taux de conversion de la version A est de ${rateA}; celui de la version B est de ${rateB}. ${significance}`,
    rec:   { 80:'Tests rapides ou à faible risque', 90:'La plupart des tests A/B courants', 95:'Décisions importantes', 99:'Changements à fort impact ou à risque élevé' },
    guide: {
      80: 'Vous acceptez 20 % de chance que le résultat soit aléatoire. Bon pour des tests rapides où le coût d\'une erreur est faible.',
      90: 'Un bon équilibre entre rapidité et confiance pour les tests courants.',
      95: 'La norme pour la plupart des expériences web. Seulement 5 % de chance que le résultat soit dû au hasard.',
      99: 'À utiliser quand une mauvaise décision serait coûteuse. Nécessite plus de données.',
    },
  }
};

const html = document.documentElement;
const $    = s => document.querySelector(s);
const lang = () => html.getAttribute('data-lang') || 'en';
const s    = () => STRINGS[lang()];
const fmtPct = (x, dp=2) => isFinite(x) ? (100*x).toFixed(dp) + '%' : '—';
const fmtAnnouncementPct = x => {
  if (!isFinite(x)) return '—';
  const value = (100*x).toFixed(2);
  return lang() === 'fr' ? value.replace('.', ',') + ' %' : value + '%';
};
const fmtAnnouncementP = x => {
  if (!isFinite(x)) return '';
  const value = x < 0.0001 ? '< 0.0001' : x.toFixed(4);
  return lang() === 'fr' ? value.replace('.', ',') : value;
};
const setText = (el, value) => {
  if (el && el.textContent !== value) el.textContent = value;
};

/* ── Apply saved language preference ── */
(function() {
  const saved = localStorage.getItem('ab-test-calculator-lang');
  if (saved === 'en' || saved === 'fr') {
    html.setAttribute('data-lang', saved);
    html.setAttribute('lang', saved);
    $('#lang-toggle').setAttribute('aria-label', saved === 'fr' ? 'Passer à l’anglais' : 'Switch to French');
  }
})();

function flash(el) {
  if (!el) return;
  // Force reflow so the CSS animation restarts even if the class is already present.
  el.classList.remove('updated'); void el.offsetWidth; el.classList.add('updated');
}

const FIELD_TYPES = {
  visA: 'visitors',
  convA: 'conversions',
  visB: 'visitors',
  convB: 'conversions',
};
const touchedFields = new Set();

function validateInputs() {
  const S = s(), states = {};

  Object.entries(FIELD_TYPES).forEach(([id, type]) => {
    const input = $('#'+id), raw = input.value.trim(), field = S.fields[id];
    const badInput = input.validity && input.validity.badInput;
    const value = Number(raw);
    let error = '';

    if (badInput || !Number.isFinite(value)) {
      error = type === 'visitors' ? S.errors.numberVisitors(field) : S.errors.numberConversions(field);
    } else if (raw === '') {
      error = type === 'visitors' ? S.errors.requiredVisitors(field) : S.errors.requiredConversions(field);
    } else if (!Number.isInteger(value)) {
      error = type === 'visitors' ? S.errors.wholeVisitors(field) : S.errors.wholeConversions(field);
    } else if (type === 'visitors' && value <= 0) {
      error = S.errors.positiveVisitors(field);
    } else if (type === 'conversions' && value < 0) {
      error = S.errors.nonNegativeConversions(field);
    } else if (!Number.isSafeInteger(value)) {
      error = S.errors.tooLarge(field);
    }

    states[id] = {
      value,
      error,
      comparable: raw !== '' && !badInput && Number.isSafeInteger(value) && value >= 0,
    };
  });

  [['convA','visA'], ['convB','visB']].forEach(([conversionId, visitorId]) => {
    const conversion = states[conversionId], visitors = states[visitorId];
    if (!conversion.error && visitors.comparable && conversion.value > visitors.value) {
      conversion.error = S.errors.exceedsVisitors(S.fields[conversionId], S.fields[visitorId]);
    }
  });

  return states;
}

function renderValidation(states) {
  const errors = [];

  Object.keys(FIELD_TYPES).forEach(id => {
    const input = $('#'+id);
    const message = touchedFields.has(id) ? states[id].error : '';
    const invalid = Boolean(message);
    setText($('#'+id+'-error'), message);
    input.classList.toggle('err', invalid);
    input.setAttribute('aria-invalid', String(invalid));
    if (message) errors.push(message);
  });

  return errors;
}

Object.keys(FIELD_TYPES).forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    touchedFields.add(id);
    compute();
  });
});

function wireHoverTooltips() {
  document.querySelectorAll('.tt').forEach(el => {
    let tip;
    const show = () => {
      const L = lang();
      const title = el.getAttribute(`data-tip-title-${L}`) || el.getAttribute('data-tip-title-en') || 'Help';
      const text  = el.getAttribute(`data-tip-${L}`)       || el.getAttribute('data-tip-en')       || '';
      if (!tip) { tip = document.createElement('div'); tip.className = 'tooltip'; el.appendChild(tip); }
      tip.innerHTML = `<span class="title">${title}</span>${text}`;
      tip.setAttribute('lang', L);
      tip.setAttribute('data-show', 'true');
    };
    const hide = () => { if (tip) tip.setAttribute('data-show', 'false'); };
    el.addEventListener('mouseenter', show);
    el.addEventListener('mouseleave', hide);
    el.addEventListener('focus',      show);
    el.addEventListener('blur',       hide);
    el.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
  });
}

$('#lang-toggle').addEventListener('click', () => {
  const newLang = lang() === 'fr' ? 'en' : 'fr';
  html.setAttribute('data-lang', newLang);
  html.setAttribute('lang', newLang);
  $('#lang-toggle').setAttribute('aria-label', newLang === 'fr' ? 'Passer à l’anglais' : 'Switch to French');
  localStorage.setItem('ab-test-calculator-lang', newLang);
  compute();
});

// Normal CDF approximation — Abramowitz & Stegun (1964) formula 26.2.17.
// Max error < 7.5e-8. Called once in compute() to derive the two-tailed p-value.
function phi(x) {
  const b1=0.319381530,b2=-0.356563782,b3=1.781477937,b4=-1.821255978,b5=1.330274429,p=0.2316419,c=0.39894228;
  const t=1/(1+p*Math.abs(x)),z=c*Math.exp(-x*x/2)*((((b5*t+b4)*t+b3)*t+b2)*t+b1)*t,r=1-z;
  return x>=0 ? r : 1-r;
}

function compute() {
  const validation = validateInputs();
  const validationErrors = renderValidation(validation);
  const nA=validation.visA.value, xA=validation.convA.value,
        nB=validation.visB.value, xB=validation.convB.value;
  if (validationErrors.length) {
    const errorSummary = s().validationSummary(validationErrors);
    ['#rateA','#rateB','#improve','#abs-diff','#pooled','#se','#z','#p']
      .forEach(id => setText($(id), '—'));
    setText($('#winner-desc'), errorSummary);
    $('#tbody').innerHTML = '';
    setText($('#confidence-status'), errorSummary);
    return;
  }
  const pA = nA > 0 ? xA / nA : NaN;
  const pB = nB > 0 ? xB / nB : NaN;
  setText($('#rateA'), fmtPct(pA)); flash($('#rateA'));
  setText($('#rateB'), fmtPct(pB)); flash($('#rateB'));
  const lift    = (isFinite(pA) && pA > 0 && isFinite(pB)) ? (pB - pA) / pA : NaN;
  const absDiff = (isFinite(pA) && isFinite(pB)) ? pB - pA : NaN;
  const improveEl = $('#improve'), absDiffEl = $('#abs-diff');
  if (isFinite(lift)) {
    setText(improveEl, (lift > 0 ? '+' : '') + (100*lift).toFixed(2) + '%');
    improveEl.className = 'result-val' + (lift > 0 ? ' positive' : lift < 0 ? ' negative' : '');
  } else { setText(improveEl, '—'); improveEl.className = 'result-val'; }
  if (isFinite(absDiff)) {
    setText(absDiffEl, (absDiff >= 0 ? '+' : '') + (absDiff*100).toFixed(2) + ' pp');
    absDiffEl.className = 'result-val' + (absDiff > 0 ? ' positive' : absDiff < 0 ? ' negative' : '');
  } else { setText(absDiffEl, '—'); absDiffEl.className = 'result-val'; }
  flash(improveEl); flash(absDiffEl);
  // SE is undefined when pooled is 0 or 1 (no variance) or either group is empty.
  const pooled = (nA+nB) > 0 ? (xA+xB)/(nA+nB) : NaN;
  const se     = (isFinite(pooled) && pooled > 0 && pooled < 1 && nA > 0 && nB > 0)
                 ? Math.sqrt(pooled*(1-pooled)*(1/nA+1/nB)) : NaN;
  const z      = (isFinite(se) && se > 0 && isFinite(pA) && isFinite(pB)) ? (pB-pA)/se : NaN;
  const pval   = isFinite(z) ? 2*(1-phi(Math.abs(z))) : NaN;
  [$('#pooled'),$('#se'),$('#z'),$('#p')].forEach(flash);
  setText($('#pooled'), fmtPct(pooled));
  setText($('#se'), isFinite(se) ? se.toFixed(4) : '—');
  setText($('#z'), isFinite(z) ? z.toFixed(2) : '—');
  setText($('#p'), isFinite(pval) ? (pval < 0.0001 ? '< 0.0001' : pval.toFixed(4)) : '—');
  const S = s(), hasData = nA > 0 && nB > 0, isEmpty = !hasData, isTie = !isEmpty&&pA===pB, aWins = !isEmpty&&!isTie&&pA>pB;
  $('#winner-block').className = 'winner-block '+((isEmpty||isTie)?'tie':(aWins?'version-a-wins':'version-b-wins'));
  setText($('#winner'), isEmpty?S.empty:(isTie?S.tie:(aWins?S.vA:S.vB)));
  setText($('#winner-desc'), '');
  const tbody = $('#tbody');
  tbody.innerHTML = '';
  for (const conf of [0.80,0.90,0.95,0.99]) {
    const chance=1-conf, pct100=Math.round(conf*100), chance100=Math.round(chance*100);
    const significant = isFinite(pval) && pval < chance;
    const who = isTie?S.whoTie:(aWins?S.whoA:S.whoB);
    const tr=document.createElement('tr');
    const td1=document.createElement('td'); td1.textContent=`${pct100}%`;
    const td2=document.createElement('td');
    td2.innerHTML=significant?`<span class="tsig ok">${S.tsigYes()}</span>`:`<span class="tsig no">${S.tsigNo()}</span>`;
    const td3=document.createElement('td'); td3.textContent=significant?S.rowSig(pct100,chance100,who):S.rowNot(pct100,chance100);
    const td4=document.createElement('td'); td4.textContent=S.rec[pct100];
    const td5=document.createElement('td'); td5.textContent=S.guide[pct100];
    tr.append(td1,td2,td3,td4,td5); tbody.appendChild(tr);
  }
  let resultSummary = '';
  if (hasData) {
    const outcome = isTie ? S.resultTie : (aWins ? S.resultLeadA : S.resultLeadB);
    const significance = !isFinite(pval)
      ? S.resultUnavailable
      : (pval < 0.05 ? S.resultSignificant(fmtAnnouncementP(pval)) : S.resultNotSignificant(fmtAnnouncementP(pval)));
    resultSummary = S.resultSummary(outcome, fmtAnnouncementPct(pA), fmtAnnouncementPct(pB), significance);
  }
  setText($('#confidence-status'), resultSummary);
}

wireHoverTooltips();
compute();
