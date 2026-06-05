/* @ds-bundle: {"format":3,"namespace":"TangerineDesignSystem_c907c9","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/feedback/Avatar.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Stat","sourcePath":"components/surfaces/Stat.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"e6d88f5e01a4","components/buttons/IconButton.jsx":"4ee4104a99fb","components/feedback/Avatar.jsx":"84d9222060ec","components/feedback/Badge.jsx":"0ff9a08c8fbd","components/feedback/Tag.jsx":"bbd572608439","components/forms/Checkbox.jsx":"038745126cfd","components/forms/Input.jsx":"dc8ac2c68a02","components/surfaces/Card.jsx":"24ea6b4361c6","components/surfaces/Stat.jsx":"3d1571d5962c","ui_kits/marketing-site/Footer.jsx":"669604836e08","ui_kits/marketing-site/Home.jsx":"202d6184f923","ui_kits/marketing-site/Nav.jsx":"983bb96b17de","ui_kits/marketing-site/ProductPage.jsx":"76fdc8b96e84","ui_kits/marketing-site/Resources.jsx":"5db299e6d07d","ui_kits/marketing-site/Support.jsx":"372de91a5090","ui_kits/marketing-site/TrialPage.jsx":"3abd9e78f731","ui_kits/marketing-site/content.jsx":"2497c8d86827","ui_kits/marketing-site/design-canvas.jsx":"bd8746af6e58","ui_kits/marketing-site/help-variants.jsx":"7161fd12d5ad"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TangerineDesignSystem_c907c9 = window.TangerineDesignSystem_c907c9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-btn{--_bg:var(--tangerine-500);--_bgh:var(--tangerine-600);--_bga:var(--tangerine-700);--_fg:#fff;
    display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);
    font-family:var(--font-sans);font-weight:var(--fw-bold);border:none;cursor:pointer;
    border-radius:var(--radius-pill);background:var(--_bg);color:var(--_fg);
    transition:background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out);
    text-decoration:none;white-space:nowrap;line-height:1;}
  .tg-btn:hover{background:var(--_bgh);}
  .tg-btn:active{background:var(--_bga);transform:translateY(1px);}
  .tg-btn:focus-visible{outline:var(--border-width-2) solid var(--focus-ring);outline-offset:2px;}
  .tg-btn[disabled]{opacity:.45;cursor:not-allowed;pointer-events:none;}
  .tg-btn--sm{font-size:var(--text-sm);padding:8px 16px;}
  .tg-btn--md{font-size:var(--text-md);padding:11px 22px;}
  .tg-btn--lg{font-size:var(--text-lg);padding:15px 30px;}
  .tg-btn--primary{box-shadow:var(--shadow-brand);} 
  .tg-btn--primary:hover{box-shadow:0 12px 28px rgba(240,84,36,.38);}
  .tg-btn--accent{--_bg:var(--gold-400);--_bgh:var(--gold-500);--_bga:var(--gold-600);--_fg:var(--neutral-900);box-shadow:var(--shadow-sm);}
  .tg-btn--secondary{--_bg:transparent;--_bgh:var(--tangerine-50);--_bga:var(--tangerine-100);--_fg:var(--tangerine-600);
    box-shadow:inset 0 0 0 var(--border-width-2) var(--tangerine-500);}
  .tg-btn--ghost{--_bg:transparent;--_bgh:var(--neutral-100);--_bga:var(--neutral-200);--_fg:var(--text-body);}
  .tg-btn--block{width:100%;}`;
  const s = document.createElement('style');
  s.id = 'tg-btn-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Tangerine primary action button.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = ['tg-btn', `tg-btn--${variant}`, `tg-btn--${size}`, block ? 'tg-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-iconbtn{display:inline-flex;align-items:center;justify-content:center;border:none;cursor:pointer;
    border-radius:var(--radius-circle);background:transparent;color:var(--text-body);
    transition:background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out);}
  .tg-iconbtn:hover{background:var(--neutral-100);color:var(--text-strong);}
  .tg-iconbtn:active{transform:translateY(1px);}
  .tg-iconbtn:focus-visible{outline:var(--border-width-2) solid var(--focus-ring);outline-offset:2px;}
  .tg-iconbtn[disabled]{opacity:.4;cursor:not-allowed;pointer-events:none;}
  .tg-iconbtn--sm{width:32px;height:32px;font-size:16px;}
  .tg-iconbtn--md{width:40px;height:40px;font-size:20px;}
  .tg-iconbtn--lg{width:48px;height:48px;font-size:24px;}
  .tg-iconbtn--solid{background:var(--tangerine-500);color:#fff;}
  .tg-iconbtn--solid:hover{background:var(--tangerine-600);color:#fff;}
  .tg-iconbtn--soft{background:var(--tangerine-50);color:var(--tangerine-600);}
  .tg-iconbtn--soft:hover{background:var(--tangerine-100);color:var(--tangerine-700);}`;
  const s = document.createElement('style');
  s.id = 'tg-iconbtn-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Circular icon-only button.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['tg-iconbtn', `tg-iconbtn--${variant}`, `tg-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-avatar{display:inline-flex;align-items:center;justify-content:center;flex:none;
    font-family:var(--font-display);font-weight:var(--fw-bold);color:#fff;overflow:hidden;
    border-radius:var(--radius-circle);background:var(--gradient-brand-diag);position:relative;}
  .tg-avatar img{width:100%;height:100%;object-fit:cover;}
  .tg-avatar--sm{width:28px;height:28px;font-size:11px;}
  .tg-avatar--md{width:40px;height:40px;font-size:15px;}
  .tg-avatar--lg{width:56px;height:56px;font-size:21px;}
  .tg-avatar--xl{width:80px;height:80px;font-size:30px;}
  .tg-avatar__ring{box-shadow:0 0 0 2px var(--surface-card),0 0 0 4px var(--tangerine-300);}`;
  const s = document.createElement('style');
  s.id = 'tg-avatar-styles';
  s.textContent = css;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

/**
 * Circular avatar with image or initials fallback.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['tg-avatar', `tg-avatar--${size}`, ring ? 'tg-avatar__ring' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-sans);
    font-weight:var(--fw-bold);font-size:var(--text-xs);line-height:1;
    padding:5px 10px;border-radius:var(--radius-pill);white-space:nowrap;}
  .tg-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
  .tg-badge--neutral{background:var(--neutral-100);color:var(--neutral-700);}
  .tg-badge--brand{background:var(--tangerine-50);color:var(--tangerine-700);}
  .tg-badge--accent{background:var(--gold-100);color:var(--gold-700);}
  .tg-badge--success{background:var(--status-success-bg);color:var(--status-success-fg);}
  .tg-badge--warning{background:var(--status-warning-bg);color:var(--status-warning-fg);}
  .tg-badge--error{background:var(--status-error-bg);color:var(--status-error-fg);}
  .tg-badge--info{background:var(--status-info-bg);color:var(--status-info-fg);}
  .tg-badge--solid.tg-badge--brand{background:var(--tangerine-500);color:#fff;}
  .tg-badge--solid.tg-badge--success{background:var(--status-success);color:#fff;}
  .tg-badge--solid.tg-badge--error{background:var(--status-error);color:#fff;}`;
  const s = document.createElement('style');
  s.id = 'tg-badge-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Status / category badge.
 */
function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['tg-badge', `tg-badge--${tone}`, solid ? 'tg-badge--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "tg-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);
    font-weight:var(--fw-semibold);font-size:var(--text-sm);line-height:1;color:var(--text-body);
    padding:6px 12px;border-radius:var(--radius-pill);background:var(--neutral-100);
    border:var(--border-width) solid transparent;transition:all var(--dur-fast) var(--ease-out);}
  .tg-tag--selected{background:var(--tangerine-50);color:var(--tangerine-700);border-color:var(--tangerine-300);}
  .tg-tag--clickable{cursor:pointer;}
  .tg-tag--clickable:hover{background:var(--neutral-200);}
  .tg-tag--selected.tg-tag--clickable:hover{background:var(--tangerine-100);}
  .tg-tag__remove{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;
    width:16px;height:16px;border-radius:50%;color:var(--text-muted);font-size:14px;line-height:1;border:none;background:transparent;}
  .tg-tag__remove:hover{background:var(--neutral-300);color:var(--text-strong);}`;
  const s = document.createElement('style');
  s.id = 'tg-tag-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Filter / selection tag chip.
 */
function Tag({
  selected = false,
  onRemove,
  onClick,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const clickable = !!onClick || selected !== undefined && !!onClick;
  const cls = ['tg-tag', selected ? 'tg-tag--selected' : '', onClick ? 'tg-tag--clickable' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "tg-tag__remove",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-check{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-sans);
    cursor:pointer;color:var(--text-body);font-size:var(--text-md);line-height:1.4;}
  .tg-check__box{flex:none;width:22px;height:22px;border-radius:var(--radius-sm);
    border:var(--border-width-2) solid var(--border-strong);background:var(--surface-card);
    display:inline-flex;align-items:center;justify-content:center;color:#fff;
    transition:background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out);}
  .tg-check__box svg{width:14px;height:14px;opacity:0;transform:scale(.6);transition:all var(--dur-fast) var(--ease-spring);}
  .tg-check input{position:absolute;opacity:0;width:0;height:0;}
  .tg-check input:checked + .tg-check__box{background:var(--tangerine-500);border-color:var(--tangerine-500);}
  .tg-check input:checked + .tg-check__box svg{opacity:1;transform:scale(1);}
  .tg-check input:focus-visible + .tg-check__box{outline:var(--border-width-2) solid var(--focus-ring);outline-offset:2px;}
  .tg-check--round .tg-check__box{border-radius:var(--radius-circle);}
  .tg-check--disabled{opacity:.5;cursor:not-allowed;pointer-events:none;}
  .tg-check__text small{display:block;color:var(--text-muted);font-size:var(--text-sm);}`;
  const s = document.createElement('style');
  s.id = 'tg-check-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Checkbox with label + optional description.
 */
function Checkbox({
  label,
  description,
  round = false,
  disabled = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['tg-check', round ? 'tg-check--round' : '', disabled ? 'tg-check--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "tg-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3.2 3.2L13 4.5",
    stroke: "currentColor",
    "stroke-width": "2.4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "tg-check__text"
  }, label, description && /*#__PURE__*/React.createElement("small", null, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans);}
  .tg-field__label{font-size:var(--text-sm);font-weight:var(--fw-bold);color:var(--text-strong);}
  .tg-field__req{color:var(--tangerine-600);margin-left:2px;}
  .tg-field__wrap{display:flex;align-items:center;gap:8px;background:var(--surface-card);
    border:var(--border-width) solid var(--border-default);border-radius:var(--radius-md);
    padding:0 14px;transition:border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out);}
  .tg-field__wrap:focus-within{border-color:var(--tangerine-500);box-shadow:0 0 0 3px var(--action-ring);}
  .tg-field__input{flex:1;border:none;outline:none;background:transparent;font:inherit;
    color:var(--text-strong);padding:11px 0;min-width:0;}
  .tg-field__input::placeholder{color:var(--text-subtle);}
  .tg-field__icon{color:var(--text-muted);display:inline-flex;font-size:18px;}
  .tg-field__help{font-size:var(--text-xs);color:var(--text-muted);}
  .tg-field--error .tg-field__wrap{border-color:var(--status-error);}
  .tg-field--error .tg-field__wrap:focus-within{box-shadow:0 0 0 3px var(--status-error-bg);}
  .tg-field--error .tg-field__help{color:var(--status-error-fg);}
  .tg-field--disabled{opacity:.55;pointer-events:none;}`;
  const s = document.createElement('style');
  s.id = 'tg-field-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Labelled text input with helper / error states.
 */
function Input({
  label,
  required = false,
  helpText,
  error,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  useStyles();
  const fieldId = id || `tg-${Math.random().toString(36).slice(2, 8)}`;
  const cls = ['tg-field', error ? 'tg-field--error' : '', disabled ? 'tg-field--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tg-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "tg-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "tg-field__wrap"
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "tg-field__icon"
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "tg-field__input",
    disabled: disabled,
    "aria-invalid": !!error
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "tg-field__icon"
  }, iconRight)), (error || helpText) && /*#__PURE__*/React.createElement("span", {
    className: "tg-field__help"
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-card{background:var(--surface-card);border-radius:var(--radius-lg);
    border:var(--border-width) solid var(--border-subtle);overflow:hidden;
    transition:box-shadow var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out);}
  .tg-card--flat{box-shadow:none;}
  .tg-card--raised{box-shadow:var(--shadow-md);border-color:transparent;}
  .tg-card--interactive{cursor:pointer;}
  .tg-card--interactive:hover{box-shadow:var(--shadow-lg);transform:translateY(-3px);}
  .tg-card--accent{border-top:4px solid var(--tangerine-500);}
  .tg-card__body{padding:var(--space-5);}
  .tg-card__media{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;}`;
  const s = document.createElement('style');
  s.id = 'tg-card-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Surface container.
 */
function Card({
  elevation = 'flat',
  interactive = false,
  accentTop = false,
  media = null,
  padded = true,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['tg-card', `tg-card--${elevation}`, interactive ? 'tg-card--interactive' : '', accentTop ? 'tg-card--accent' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), media && (typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: "tg-card__media",
    src: media,
    alt: ""
  }) : media), padded ? /*#__PURE__*/React.createElement("div", {
    className: "tg-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-stat{display:flex;flex-direction:column;gap:2px;font-family:var(--font-sans);}
  .tg-stat__value{font-family:var(--font-display);font-weight:var(--fw-extra);line-height:1;
    color:var(--text-strong);font-size:var(--text-4xl);letter-spacing:-0.02em;}
  .tg-stat__value--gradient{background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;color:transparent;}
  .tg-stat__label{font-size:var(--text-sm);color:var(--text-muted);font-weight:var(--fw-semibold);}
  .tg-stat__delta{display:inline-flex;align-items:center;gap:3px;font-size:var(--text-xs);
    font-weight:var(--fw-bold);margin-top:4px;}
  .tg-stat__delta--up{color:var(--status-success);}
  .tg-stat__delta--down{color:var(--status-error);}
  .tg-stat--sm .tg-stat__value{font-size:var(--text-2xl);}
  .tg-stat--lg .tg-stat__value{font-size:var(--text-6xl);}`;
  const s = document.createElement('style');
  s.id = 'tg-stat-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Big-number metric display.
 */
function Stat({
  value,
  label,
  delta,
  trend = 'up',
  size = 'md',
  gradient = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['tg-stat', `tg-stat--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: `tg-stat__value${gradient ? ' tg-stat__value--gradient' : ''}`
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "tg-stat__label"
  }, label), delta && /*#__PURE__*/React.createElement("span", {
    className: `tg-stat__delta tg-stat__delta--${trend}`
  }, trend === 'up' ? '▲' : '▼', " ", delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
// Tangerine marketing site — footer
function Footer({
  go
}) {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__col"
  }, /*#__PURE__*/React.createElement("h4", null, title), links.map(([l, to]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: "mk-foot__link",
    onClick: () => to && go(to)
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    className: "mk-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/tangerine-logo.png",
    alt: "Tangerine"
  }), /*#__PURE__*/React.createElement("p", null, "Open-source, offline-first data collection for education \u2014 deployed in 65+ countries.")), col('Products', [['Tangerine', 'p-tangerine'], ['Tangerine:Teach', 'p-teach'], ['Tangerine:Coach', 'p-coach'], ['Tangerine:Acuity', 'p-acuity']]), col('Resources', [['User Stories', 'user-stories'], ['Impact', 'impact'], ['FAQs', 'faqs'], ['Get Tangerine', 'trial']]), col('Support', [['Help', 'help'], ['Contact Us', 'contact'], ['About', 'about']])), /*#__PURE__*/React.createElement("div", {
    className: "mk-foot__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA92025 Tangerine Central, LLC. All Rights Reserved."), /*#__PURE__*/React.createElement("span", null, "The Tangerine Logo is a registered trademark of Research Triangle Institute.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Home.jsx
try { (() => {
// Tangerine marketing site — Home page
const {
  Button: MKButton,
  Card: MKCard,
  Stat: MKStat
} = window.TangerineDesignSystem_c907c9;
const PRODUCTS = [{
  icon: '../../assets/product-icons/tangerine.png',
  name: 'Tangerine®',
  to: 'p-tangerine',
  points: ['Large-scale assessments and surveys by trained data-collection teams', 'Automatically syncs results to secure servers for centralized analysis', 'Monitor learning outcomes, identify trends, and inform policy']
}, {
  icon: '../../assets/product-icons/teach.png',
  name: 'Tangerine:Teach',
  to: 'p-teach',
  points: ['Track student attendance, behavior, and learning progress', 'Groups students and recommends targeted interventions', 'Embedded feedback and reporting tools for educators']
}, {
  icon: '../../assets/product-icons/coach.png',
  name: 'Tangerine:Coach',
  to: 'p-coach',
  points: ['Conduct classroom observations and give teacher feedback', 'Instant results and suggested feedback for real-time coaching', 'Monitor instructional quality across schools or regions']
}];
const FEATURES = [{
  img: '../../assets/illustrations/global.png',
  title: 'Global Impact',
  body: 'Over 5 million assessments and surveys conducted across 65 countries, supported by 80 organizations and researchers.'
}, {
  img: '../../assets/illustrations/cloud.png',
  title: 'Timely Data',
  body: 'Say goodbye to weeks of waiting. Results are available immediately upon upload for timely, accurate insights.'
}, {
  img: '../../assets/illustrations/brain.png',
  title: 'Versatile Capabilities',
  body: 'Beyond academics — non-cognitive assessments, inclusive education, and social-emotional learning.'
}];
const PARTNERS = ['sesame', 'save-the-children', 'world-vision', 'air', 'irc', 'worldreader', 'concern', 'ipa'];
const STORIES = [{
  tag: '/school-to-school',
  title: 'Tablets Are In, Paper Is Out: School-to-School International Embracing Electronic Data Collection'
}, {
  tag: '/central-square-foundation',
  title: 'System-Led Assessment at Scale in India'
}];
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "mk-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mk-hero__bg",
    src: "../../assets/imagery/hero-overlay.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__content"
  }, /*#__PURE__*/React.createElement("h1", null, "Actionable insights,", /*#__PURE__*/React.createElement("br", null), "anywhere."), /*#__PURE__*/React.createElement("p", {
    className: "mk-hero__sub"
  }, "Supporting education and innovation."), /*#__PURE__*/React.createElement("p", {
    className: "mk-hero__body"
  }, "Tangerine\xAE is transforming how education systems collect data, assess learning, and support teachers \u2014 especially in resource-constrained environments. Open-source and offline-first."), /*#__PURE__*/React.createElement(MKButton, {
    variant: "primary",
    size: "lg",
    onClick: () => go('trial')
  }, "Get Tangerine"))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow",
    style: {
      textAlign: 'center'
    }
  }, "The Suite"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, "Tangerine\xAE Product Suite"), /*#__PURE__*/React.createElement("div", {
    className: "mk-suite"
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(MKCard, {
    key: p.name,
    elevation: "raised",
    accentTop: true,
    className: "mk-suite__card"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mk-suite__icon",
    src: p.icon,
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", null, p.name), /*#__PURE__*/React.createElement("ul", {
    className: "mk-suite__list"
  }, p.points.map((pt, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, pt))), /*#__PURE__*/React.createElement("button", {
    className: "mk-link",
    onClick: () => p.to && go(p.to)
  }, "Explore ", p.name, " \u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section mk-section--soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-features"
  }, FEATURES.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title,
    className: "mk-feature"
  }, /*#__PURE__*/React.createElement("img", {
    src: f.img,
    alt: ""
  }), /*#__PURE__*/React.createElement("h3", null, f.title), /*#__PURE__*/React.createElement("p", null, f.body))))), /*#__PURE__*/React.createElement("section", {
    className: "mk-impact"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title",
    style: {
      color: '#fff'
    }
  }, "Tangerine\u2019s local and global impact"), /*#__PURE__*/React.createElement("div", {
    className: "mk-impact__row"
  }, /*#__PURE__*/React.createElement(MKStat, {
    value: "100+",
    label: "languages",
    size: "lg"
  }), /*#__PURE__*/React.createElement(MKStat, {
    value: "60+",
    label: "countries worldwide",
    size: "lg"
  }), /*#__PURE__*/React.createElement(MKStat, {
    value: "80+",
    label: "organizations",
    size: "lg"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow",
    style: {
      textAlign: 'center'
    }
  }, "User Stories"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, "From the field"), /*#__PURE__*/React.createElement("div", {
    className: "mk-stories"
  }, STORIES.map(s => /*#__PURE__*/React.createElement(MKCard, {
    key: s.tag,
    interactive: true,
    elevation: "raised",
    className: "mk-story",
    onClick: () => go('user-stories')
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-story__tag"
  }, s.tag), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("span", {
    className: "mk-link"
  }, "Continue Reading \u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section mk-section--soft"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, "Tangerine\xAE Community"), /*#__PURE__*/React.createElement("div", {
    className: "mk-partners"
  }, PARTNERS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    className: "mk-partners__item"
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/partners/${p}.png`,
    alt: p
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement("h2", null, "Ready to try Tangerine?"), /*#__PURE__*/React.createElement("p", null, "Start a free trial today."), /*#__PURE__*/React.createElement(MKButton, {
    variant: "accent",
    size: "lg",
    onClick: () => go('trial')
  }, "Get Started")));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Nav.jsx
try { (() => {
// Tangerine marketing site — top navigation
const {
  Button
} = window.TangerineDesignSystem_c907c9;
const {
  useState
} = React;
const NAV = [{
  label: 'Home',
  to: 'home'
}, {
  label: 'Products',
  menu: [{
    label: 'Tangerine®',
    to: 'p-tangerine'
  }, {
    label: 'Tangerine:Coach',
    to: 'p-coach'
  }, {
    label: 'Tangerine:Teach',
    to: 'p-teach'
  }, {
    label: 'Tangerine:Acuity',
    to: 'p-acuity'
  }]
}, {
  label: 'Resources',
  menu: [{
    label: 'User Stories',
    to: 'user-stories'
  }, {
    label: 'Impact',
    to: 'impact'
  }, {
    label: 'FAQs',
    to: 'faqs'
  }, {
    label: 'Get Tangerine',
    to: 'trial'
  }]
}, {
  label: 'Support',
  menu: [{
    label: 'Help',
    to: 'help'
  }, {
    label: 'Contact Us',
    to: 'contact'
  }, {
    label: 'About',
    to: 'about'
  }]
}];
function Nav({
  go
}) {
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("header", {
    className: "mk-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-nav__brand",
    onClick: () => go('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/tangerine-logo.png",
    alt: "Tangerine"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "mk-nav__links",
    onMouseLeave: () => setOpen(null)
  }, NAV.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    className: "mk-nav__item",
    onMouseEnter: () => setOpen(item.menu ? item.label : null)
  }, /*#__PURE__*/React.createElement("button", {
    className: "mk-nav__link",
    onClick: () => item.to && go(item.to)
  }, item.label, item.menu && /*#__PURE__*/React.createElement("span", {
    className: "mk-nav__caret"
  }, "\u25BE")), item.menu && open === item.label && /*#__PURE__*/React.createElement("div", {
    className: "mk-nav__menu"
  }, item.menu.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.label,
    className: "mk-nav__menu-link",
    onClick: () => {
      m.to && go(m.to);
      setOpen(null);
    }
  }, m.label)))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go('trial')
  }, "Get Started")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductPage.jsx
try { (() => {
// Tangerine marketing site — generic product detail page (data-driven)
const {
  Button: PPButton,
  Card: PPCard,
  Badge: PPBadge
} = window.TangerineDesignSystem_c907c9;
function FeatureBlock({
  block,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mk-feature-row' + (block.reverse ? ' mk-feature-row--rev' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-feature-row__text"
  }, block.eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, block.eyebrow), /*#__PURE__*/React.createElement("h2", null, block.heading), block.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)), block.cta && /*#__PURE__*/React.createElement(PPButton, {
    variant: "primary",
    onClick: () => go(block.cta.to)
  }, block.cta.label)), /*#__PURE__*/React.createElement("figure", {
    className: "mk-feature-row__media"
  }, /*#__PURE__*/React.createElement(PPCard, {
    elevation: "raised",
    padded: false
  }, /*#__PURE__*/React.createElement("img", {
    src: block.image,
    alt: block.heading
  })), block.caption && /*#__PURE__*/React.createElement("figcaption", null, block.caption)));
}
function WideBlock({
  block
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mk-wide-block"
  }, block.eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow",
    style: {
      textAlign: 'center'
    }
  }, block.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, block.heading), block.body && block.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "mk-section__lead"
  }, p)), /*#__PURE__*/React.createElement(PPCard, {
    elevation: "raised",
    padded: false,
    className: "mk-report"
  }, /*#__PURE__*/React.createElement("img", {
    src: block.image,
    alt: block.heading
  })));
}
function ModulesBlock({
  block
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mk-modules"
  }, block.cards.map(m => /*#__PURE__*/React.createElement(PPCard, {
    key: m.title,
    elevation: "raised",
    media: m.img,
    className: "mk-module"
  }, /*#__PURE__*/React.createElement("h3", null, m.title), /*#__PURE__*/React.createElement("p", null, m.body))));
}
function VideoBlock({
  block
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mk-video"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, block.heading), /*#__PURE__*/React.createElement("div", {
    className: "mk-video__frame"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: `https://www.youtube.com/embed/${block.id}`,
    title: block.heading,
    frameBorder: "0",
    allowFullScreen: true,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  })));
}
function ProductPage({
  go,
  product
}) {
  const p = product;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "mk-breadcrumb"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home')
  }, "HOME"), " > PRODUCTS > ", /*#__PURE__*/React.createElement("strong", null, p.crumb)), /*#__PURE__*/React.createElement("section", {
    className: 'mk-prod-hero' + (p.logoTall ? ' mk-prod-hero--tall' : '')
  }, /*#__PURE__*/React.createElement("img", {
    className: "mk-prod-hero__logo",
    src: p.logo,
    alt: p.name
  }), /*#__PURE__*/React.createElement("h1", null, p.name), p.badge && /*#__PURE__*/React.createElement("div", {
    className: "mk-prod-hero__badge"
  }, /*#__PURE__*/React.createElement(PPBadge, {
    tone: "accent",
    solid: true
  }, p.badge)), p.lead.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, t))), p.blocks.map((block, i) => {
    const soft = i % 2 === 0;
    return /*#__PURE__*/React.createElement("section", {
      key: i,
      className: 'mk-section' + (soft ? ' mk-section--soft' : '')
    }, block.type === 'feature' && (block.wide ? /*#__PURE__*/React.createElement(WideBlock, {
      block: block
    }) : /*#__PURE__*/React.createElement(FeatureBlock, {
      block: block,
      go: go
    })), block.type === 'modules' && /*#__PURE__*/React.createElement(ModulesBlock, {
      block: block
    }), block.type === 'video' && /*#__PURE__*/React.createElement(VideoBlock, {
      block: block
    }));
  }), /*#__PURE__*/React.createElement("section", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement("h2", null, p.cta.heading), /*#__PURE__*/React.createElement(PPButton, {
    variant: "accent",
    size: "lg",
    onClick: () => go(p.cta.to)
  }, p.cta.label)));
}
window.ProductPage = ProductPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Resources.jsx
try { (() => {
// Tangerine marketing site — Resources pages (Impact, User Stories, FAQs)
const {
  Button: RsButton,
  Card: RsCard,
  Stat: RsStat,
  Badge: RsBadge
} = window.TangerineDesignSystem_c907c9;
const {
  useState: useRsState
} = React;
const PARTNERS_ALL = ['sesame', 'save-the-children', 'world-vision', 'air', 'irc', 'worldreader', 'concern', 'ipa'];
function ImpactPage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "mk-page-hero mk-page-hero--brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-page-hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow",
    style: {
      color: 'var(--gold-300)'
    }
  }, "Impact"), /*#__PURE__*/React.createElement("h1", null, "Tangerine\u2019s local and global impact"), /*#__PURE__*/React.createElement("p", null, "Tangerine has modernized reading and mathematics assessments in resource-constrained settings around the world."))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-impact-grid"
  }, /*#__PURE__*/React.createElement(RsStat, {
    value: "5M+",
    label: "assessments & surveys conducted",
    gradient: true,
    size: "lg"
  }), /*#__PURE__*/React.createElement(RsStat, {
    value: "65+",
    label: "countries",
    gradient: true,
    size: "lg"
  }), /*#__PURE__*/React.createElement(RsStat, {
    value: "80+",
    label: "organizations & researchers",
    gradient: true,
    size: "lg"
  }), /*#__PURE__*/React.createElement(RsStat, {
    value: "100+",
    label: "languages",
    gradient: true,
    size: "lg"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section mk-section--soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-split"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/global.png",
    alt: "",
    className: "mk-split__art"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Modernizing assessment where it\u2019s needed most"), /*#__PURE__*/React.createElement("p", null, "Over a decade of proven performance, millions of successful assessments, and deployment across 65+ countries have established Tangerine as a trusted standard for reliable, versatile data collection \u2014 and it is open-source."), /*#__PURE__*/React.createElement("p", null, "Beyond academics, Tangerine facilitates non-cognitive assessments, inclusive education, and social-emotional learning. We\u2019re not just assessing knowledge; we\u2019re nurturing holistic development."), /*#__PURE__*/React.createElement(RsButton, {
    variant: "secondary",
    onClick: () => go('user-stories')
  }, "Read user stories")))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, "Trusted by a global community"), /*#__PURE__*/React.createElement("div", {
    className: "mk-partners"
  }, PARTNERS_ALL.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    className: "mk-partners__item"
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/partners/${p}.png`,
    alt: p
  }))))));
}
function UserStoriesPage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "mk-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-page-hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "User Stories"), /*#__PURE__*/React.createElement("h1", null, "From the field"), /*#__PURE__*/React.createElement("p", null, "How organizations around the world put Tangerine to work."))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-stories"
  }, window.TG_STORIES.map(s => /*#__PURE__*/React.createElement(RsCard, {
    key: s.tag,
    interactive: true,
    elevation: "raised",
    className: "mk-story"
  }, /*#__PURE__*/React.createElement(RsBadge, {
    tone: "brand"
  }, s.org), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.body), /*#__PURE__*/React.createElement("span", {
    className: "mk-story__tag"
  }, s.tag), /*#__PURE__*/React.createElement("span", {
    className: "mk-link"
  }, "Continue Reading \u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement("h2", null, "Have a Tangerine story to share?"), /*#__PURE__*/React.createElement("p", null, "We\u2019d love to hear how you\u2019re using Tangerine in your program."), /*#__PURE__*/React.createElement(RsButton, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Get in touch")));
}
function FaqRow({
  item,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mk-faq' + (open ? ' mk-faq--open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: "mk-faq__q",
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
    className: "mk-faq__icon"
  }, open ? '−' : '+')), open && /*#__PURE__*/React.createElement("div", {
    className: "mk-faq__a"
  }, item.a));
}
function FaqsPage({
  go
}) {
  const [open, setOpen] = useRsState('0-0');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "mk-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-page-hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "FAQs"), /*#__PURE__*/React.createElement("h1", null, "Frequently asked questions"), /*#__PURE__*/React.createElement("p", null, "Everything from device requirements to data, security, and support."))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section mk-section--narrow"
  }, window.TG_FAQS.map((group, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    className: "mk-faq-group"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mk-faq-group__title"
  }, group.cat), /*#__PURE__*/React.createElement("div", {
    className: "mk-faqs"
  }, group.items.map((item, ii) => {
    const id = gi + '-' + ii;
    return /*#__PURE__*/React.createElement(FaqRow, {
      key: id,
      item: item,
      open: open === id,
      onToggle: () => setOpen(open === id ? '' : id)
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mk-faqs__foot"
  }, /*#__PURE__*/React.createElement("p", null, "Still have questions?"), /*#__PURE__*/React.createElement(RsButton, {
    variant: "secondary",
    onClick: () => go('contact')
  }, "Contact us"))));
}
window.ImpactPage = ImpactPage;
window.UserStoriesPage = UserStoriesPage;
window.FaqsPage = FaqsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Resources.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Support.jsx
try { (() => {
// Tangerine marketing site — Support pages (About, Contact, Help)
const {
  Button: SpButton,
  Card: SpCard,
  Input: SpInput,
  Badge: SpBadge
} = window.TangerineDesignSystem_c907c9;
const {
  useState: useSpState
} = React;
function AboutPage({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "mk-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-page-hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "About"), /*#__PURE__*/React.createElement("h1", null, "What is Tangerine Central?"), /*#__PURE__*/React.createElement("p", null, "Tangerine Central is a women-owned small business dedicated to advancing efficient, effective data collection and use in any setting \u2014 online or offline. Our mission is to ease the burden of data collection and deliver timely, actionable insights in even the most resource-constrained settings."))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-principles"
  }, window.TG_PRINCIPLES.map(p => /*#__PURE__*/React.createElement(SpCard, {
    key: p.title,
    elevation: "raised",
    accentTop: true,
    className: "mk-principle"
  }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.body)))), /*#__PURE__*/React.createElement("p", {
    className: "mk-section__lead",
    style: {
      marginTop: 'var(--space-7)'
    }
  }, "Our team combines expert leadership in learning assessment, digital platform development, AI and data science, program implementation, and capacity strengthening \u2014 grounded in decades of experience designing, deploying, and scaling Tangerine. We provide hands-on support with instrument design, deployment, and data analysis, plus training and capacity building so partners can use Tangerine effectively and independently.")), /*#__PURE__*/React.createElement("section", {
    className: "mk-section mk-section--soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-story-feature"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "From paper to progress"), /*#__PURE__*/React.createElement("h2", null, "The story of Tangerine"), /*#__PURE__*/React.createElement("p", null, "Tangerine was born out of first-hand experience collecting student data in low-resource and remote contexts. During a challenging early-grade reading assessment on an RTI International project, co-founders Carmen and Amber found themselves buried in paper forms, battling malfunctioning staplers, illegible copies, and missing data. The process was slow, outdated, and error-prone. They knew there had to be a better way."), /*#__PURE__*/React.createElement("p", null, "That moment sparked Tangerine: a digital solution to improve data quality, streamline fieldwork, and enable real-time monitoring \u2014 no more waiting weeks to discover surprises in the data. What started in 2011 as a tool for early reading assessments has grown into a versatile, offline-first platform used in 65+ countries."), /*#__PURE__*/React.createElement("p", null, "In 2025, Tangerine was brought under the management of Tangerine Central, led by Carmen and Amber \u2014 continuing to help governments and organizations unlock the power of data to improve lives.")), /*#__PURE__*/React.createElement("blockquote", {
    className: "mk-belief"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg-eyebrow"
  }, "Our guiding belief"), /*#__PURE__*/React.createElement("p", null, "Quality, timely data has the power to change lives for the better \u2014 and is essential to helping communities shape their own futures.")))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow",
    style: {
      textAlign: 'center'
    }
  }, "Our Team"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, "Get to know our team"), /*#__PURE__*/React.createElement("div", {
    className: "mk-team"
  }, window.TG_TEAM.map(m => /*#__PURE__*/React.createElement(SpCard, {
    key: m.name,
    elevation: "raised",
    className: "mk-member"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mk-member__photo",
    src: m.photo,
    alt: m.name
  }), /*#__PURE__*/React.createElement("h3", null, m.name), /*#__PURE__*/React.createElement("p", {
    className: "mk-member__role"
  }, m.role), /*#__PURE__*/React.createElement("p", {
    className: "mk-member__bio"
  }, m.bio), /*#__PURE__*/React.createElement("a", {
    className: "mk-link",
    href: m.linkedin,
    target: "_blank",
    rel: "noopener"
  }, "Connect on LinkedIn \u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section mk-section--soft"
  }, /*#__PURE__*/React.createElement(SpCard, {
    elevation: "raised",
    accentTop: true,
    className: "mk-podcast"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "Podcast"), /*#__PURE__*/React.createElement("h2", null, "Open-source tools in low-resource settings"), /*#__PURE__*/React.createElement("p", null, "Hear Dr.\xA0Carmen Strigel explain why open-source software like Tangerine and Loquat matters for education in low-resource settings."), /*#__PURE__*/React.createElement(SpButton, {
    as: "a",
    variant: "secondary",
    href: "https://bold.expert/ai-edtech-in-low-resource-settings/",
    target: "_blank",
    rel: "noopener"
  }, "Listen to the podcast")), /*#__PURE__*/React.createElement("div", {
    className: "mk-podcast__mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product-icons/tangerine.png",
    alt: ""
  })))), /*#__PURE__*/React.createElement("section", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement("h2", null, "Ready to try Tangerine?"), /*#__PURE__*/React.createElement(SpButton, {
    variant: "accent",
    size: "lg",
    onClick: () => go('trial')
  }, "Get Started")));
}
const SOCIALS = [{
  label: 'YouTube',
  href: 'https://www.youtube.com/channel/UC8U-vN0_ezdCjGfT34sxBlQ'
}, {
  label: 'Twitter / X',
  href: 'http://twitter.com/TangerineTool'
}, {
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/company/tangerine-central'
}];
function ContactPage({
  go
}) {
  const [sent, setSent] = useSpState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "mk-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-page-hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "Contact Us"), /*#__PURE__*/React.createElement("h1", null, "Let\u2019s talk"), /*#__PURE__*/React.createElement("p", null, "Questions about deployment, customization, or a free trial? Our team is here to help."))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-contact"
  }, /*#__PURE__*/React.createElement(SpCard, {
    elevation: "raised",
    className: "mk-contact__form"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "mk-trial__done"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-trial__check"
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", null, "Message sent"), /*#__PURE__*/React.createElement("p", null, "Thanks for reaching out \u2014 we\u2019ll be in touch soon."), /*#__PURE__*/React.createElement(SpButton, {
    variant: "secondary",
    onClick: () => go('home')
  }, "Back to home")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Send us a message"), /*#__PURE__*/React.createElement(SpInput, {
    label: "Full name",
    required: true,
    placeholder: "Amara Okafor"
  }), /*#__PURE__*/React.createElement(SpInput, {
    label: "Work email",
    type: "email",
    required: true,
    placeholder: "you@organization.org"
  }), /*#__PURE__*/React.createElement(SpInput, {
    label: "Organization",
    placeholder: "Your organization"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mk-textarea"
  }, /*#__PURE__*/React.createElement("span", null, "How can we help?"), /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    placeholder: 'Tell us about your program…'
  })), /*#__PURE__*/React.createElement(SpButton, {
    variant: "primary",
    block: true,
    onClick: () => setSent(true)
  }, "Send message"))), /*#__PURE__*/React.createElement("aside", {
    className: "mk-contact__aside"
  }, /*#__PURE__*/React.createElement("h3", null, "Other ways to reach us"), /*#__PURE__*/React.createElement("p", null, "Prefer a quick start? Request a trial directly."), /*#__PURE__*/React.createElement(SpButton, {
    variant: "accent",
    onClick: () => go('trial')
  }, "Get Tangerine"), /*#__PURE__*/React.createElement("div", {
    className: "mk-contact__socials"
  }, /*#__PURE__*/React.createElement("h4", null, "Follow along"), SOCIALS.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    target: "_blank",
    rel: "noopener",
    className: "mk-contact__social"
  }, s.label, " \u2192")))))));
}
function HelpPage({
  go
}) {
  const entries = Object.entries(window.TG_HELP);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "mk-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-page-hero__inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "Help"), /*#__PURE__*/React.createElement("h1", null, "How can we help?"), /*#__PURE__*/React.createElement("p", null, "Guides and answers for getting the most out of the Tangerine suite."))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-help-grid"
  }, entries.map(([slug, art]) => /*#__PURE__*/React.createElement(SpCard, {
    key: slug,
    interactive: true,
    elevation: "raised",
    className: "mk-help",
    onClick: () => go('help/' + slug)
  }, /*#__PURE__*/React.createElement("h3", null, art.title), /*#__PURE__*/React.createElement("p", null, art.summary), /*#__PURE__*/React.createElement("span", {
    className: "mk-link"
  }, "Learn more \u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement("h2", null, "Can\u2019t find what you need?"), /*#__PURE__*/React.createElement("p", null, "Our team is happy to help with setup, customization, and rollout."), /*#__PURE__*/React.createElement(SpButton, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Contact support")));
}
function HelpArticlePage({
  go,
  slug
}) {
  const art = window.TG_HELP[slug];
  if (!art) {
    go('help');
    return null;
  }
  const slugs = Object.keys(window.TG_HELP);
  const idx = slugs.indexOf(slug);
  const next = slugs[(idx + 1) % slugs.length];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "mk-breadcrumb"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home')
  }, "HOME"), " >", ' ', /*#__PURE__*/React.createElement("button", {
    onClick: () => go('help')
  }, "HELP"), " > ", /*#__PURE__*/React.createElement("strong", null, art.title.toUpperCase())), /*#__PURE__*/React.createElement("article", {
    className: "mk-article"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "Help"), /*#__PURE__*/React.createElement("h1", null, art.title), /*#__PURE__*/React.createElement("p", {
    className: "mk-article__intro"
  }, art.intro), art.sections.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: i,
    className: "mk-article__sec"
  }, /*#__PURE__*/React.createElement("h2", null, s.h), s.p && s.p.map((p, j) => /*#__PURE__*/React.createElement("p", {
    key: j
  }, p)), s.steps && /*#__PURE__*/React.createElement("ol", {
    className: "mk-article__steps"
  }, s.steps.map((t, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, t))), s.list && /*#__PURE__*/React.createElement("ul", {
    className: "mk-article__list"
  }, s.list.map((t, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, t))), s.link && /*#__PURE__*/React.createElement(SpButton, {
    as: "a",
    variant: "secondary",
    href: s.link.href,
    target: "_blank",
    rel: "noopener",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2197")
  }, s.link.label))), /*#__PURE__*/React.createElement("div", {
    className: "mk-article__foot"
  }, /*#__PURE__*/React.createElement(SpButton, {
    variant: "ghost",
    onClick: () => go('help'),
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\u2190")
  }, "All help topics"), /*#__PURE__*/React.createElement(SpButton, {
    variant: "secondary",
    onClick: () => go('help/' + next),
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Next: ", window.TG_HELP[next].title))), /*#__PURE__*/React.createElement("section", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement("h2", null, "Still stuck?"), /*#__PURE__*/React.createElement("p", null, "Our team is happy to help with setup, customization, and rollout."), /*#__PURE__*/React.createElement(SpButton, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Contact support")));
}
window.AboutPage = AboutPage;
window.ContactPage = ContactPage;
window.HelpPage = HelpPage;
window.HelpArticlePage = HelpArticlePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Support.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/TrialPage.jsx
try { (() => {
// Tangerine marketing site — Get Tangerine / Pricing page
const {
  Button: TPButton,
  Card: TPCard,
  Input: TPInput,
  Checkbox: TPCheckbox,
  Badge: TPBadge
} = window.TangerineDesignSystem_c907c9;
const {
  useState: useTPState,
  useRef: useTPRef
} = React;
const SUB_BENEFITS = ['Technical support and troubleshooting', 'Training resources, including Moodle-based courses', 'Participation in a global peer community of Tangerine users', 'Contribution to and use of a shared instrument library (coming soon)'];
function PricingTier({
  tier,
  onChoose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'mk-tier' + (tier.featured ? ' mk-tier--featured' : '')
  }, tier.featured && /*#__PURE__*/React.createElement("div", {
    className: "mk-tier__flag"
  }, "Most popular"), /*#__PURE__*/React.createElement("h3", {
    className: "mk-tier__name"
  }, tier.name), /*#__PURE__*/React.createElement("div", {
    className: "mk-tier__price"
  }, tier.price), /*#__PURE__*/React.createElement("div", {
    className: "mk-tier__period"
  }, tier.period || ' '), /*#__PURE__*/React.createElement("ul", {
    className: "mk-tier__list"
  }, /*#__PURE__*/React.createElement("li", null, tier.results), /*#__PURE__*/React.createElement("li", null, tier.support), tier.features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, f))), /*#__PURE__*/React.createElement(TPButton, {
    variant: tier.featured ? 'primary' : 'secondary',
    block: true,
    onClick: () => onChoose(tier)
  }, tier.cta));
}
function TrialPage({
  go
}) {
  const [sent, setSent] = useTPState(false);
  const formRef = useTPRef(null);
  const toForm = tier => {
    if (tier && tier.cta === 'Contact us') {
      go('contact');
      return;
    }
    if (formRef.current) formRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "mk-breadcrumb"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home')
  }, "HOME"), " > ", /*#__PURE__*/React.createElement("strong", null, "PRICING")), /*#__PURE__*/React.createElement("section", {
    className: "mk-prod-hero"
  }, /*#__PURE__*/React.createElement("h1", null, "Tangerine subscription pricing"), /*#__PURE__*/React.createElement("p", null, "Tangerine is open-source software \u2014 anyone can download the source code and run it on their own server, for free. This is ideal for organizations with the technical capacity to manage their own hosting and support."), /*#__PURE__*/React.createElement("p", null, "A paid subscription to Tangerine Central provides a ready-to-use, hosted and maintained version: your own secure \u201Cinstance\u201D where you can build assessments, collect and access data, and manage users \u2014 without worrying about setup, updates, security, or server maintenance.")), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-pricing"
  }, window.TG_PRICING.map(t => /*#__PURE__*/React.createElement(PricingTier, {
    key: t.name,
    tier: t,
    onChoose: toForm
  }))), /*#__PURE__*/React.createElement("p", {
    className: "mk-pricing__note"
  }, "Subscription fees are per year and per organization. Prices are subject to change."), /*#__PURE__*/React.createElement("div", {
    className: "mk-benefits"
  }, /*#__PURE__*/React.createElement("h3", null, "Every subscription includes"), /*#__PURE__*/React.createElement("ul", null, SUB_BENEFITS.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, b))), /*#__PURE__*/React.createElement("p", null, "This model supports sustainability and collaboration, while keeping the core software free and open to all."))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section mk-section--soft",
    ref: formRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-trial__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-trial__copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "Free trial"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)'
    }
  }, "Want to try before you buy?"), /*#__PURE__*/React.createElement("p", null, "Tell us a little about your program and we\u2019ll set you up with a free trial of the Tangerine suite \u2014 assessments, classroom tracking, and coaching, online or off."), /*#__PURE__*/React.createElement("ul", {
    className: "mk-trial__benefits"
  }, /*#__PURE__*/React.createElement("li", null, "Open-source & offline-first"), /*#__PURE__*/React.createElement("li", null, "Deploy on tablets or smartphones"), /*#__PURE__*/React.createElement("li", null, "Sync to secure servers when connected"))), /*#__PURE__*/React.createElement(TPCard, {
    elevation: "raised",
    className: "mk-trial__form"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "mk-trial__done"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-trial__check"
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", null, "Thanks \u2014 you\u2019re on the list!"), /*#__PURE__*/React.createElement("p", null, "Our team will reach out with your trial details shortly."), /*#__PURE__*/React.createElement(TPButton, {
    variant: "secondary",
    onClick: () => go('home')
  }, "Back to home")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Request your free trial"), /*#__PURE__*/React.createElement(TPInput, {
    label: "Full name",
    required: true,
    placeholder: "Amara Okafor"
  }), /*#__PURE__*/React.createElement(TPInput, {
    label: "Work email",
    type: "email",
    required: true,
    placeholder: "you@organization.org"
  }), /*#__PURE__*/React.createElement(TPInput, {
    label: "Organization",
    placeholder: "e.g. School-to-School International"
  }), /*#__PURE__*/React.createElement(TPInput, {
    label: "Country",
    placeholder: "Where will you deploy?"
  }), /*#__PURE__*/React.createElement(TPCheckbox, {
    label: "Send me product updates and field stories.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(TPButton, {
    variant: "primary",
    block: true,
    onClick: () => setSent(true)
  }, "Request trial"))))), /*#__PURE__*/React.createElement("section", {
    className: "mk-section"
  }, /*#__PURE__*/React.createElement(TPCard, {
    elevation: "raised",
    accentTop: true,
    className: "mk-selfhost"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TPBadge, {
    tone: "brand"
  }, "Open source"), /*#__PURE__*/React.createElement("h2", null, "Host Tangerine yourself"), /*#__PURE__*/React.createElement("p", null, "Tangerine\u2019s open nature lets you host the platform on your own server and adapt its code to your needs. We only ask that if you make changes, you share modified code with the community. Tangerine is available under the GNU General Public License."), /*#__PURE__*/React.createElement(TPButton, {
    as: "a",
    variant: "secondary",
    href: "https://github.com/Tangerine-Community/",
    target: "_blank",
    rel: "noopener",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2197")
  }, "Source code & docs on GitHub")), /*#__PURE__*/React.createElement("div", {
    className: "mk-selfhost__mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product-icons/tangerine.png",
    alt: ""
  })))), /*#__PURE__*/React.createElement("section", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement("h2", null, "Ready to get started with Tangerine?"), /*#__PURE__*/React.createElement(TPButton, {
    variant: "accent",
    size: "lg",
    onClick: () => toForm(null)
  }, "Start free trial")));
}
window.TrialPage = TrialPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/TrialPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/content.jsx
try { (() => {
// Tangerine marketing site — page content (real copy from tangerinecentral.org)

window.TG_PRODUCTS = {
  'p-tangerine': {
    key: 'p-tangerine',
    crumb: 'TANGERINE',
    name: 'Tangerine®',
    logo: '../../assets/logos/tangerine-logo.png',
    logoTall: true,
    lead: ['Tangerine is an open-source software platform designed to support data collection in low-resource settings, especially in education. It works offline, making it ideal for areas with limited or no internet access. Originally developed to assess early reading and math skills, Tangerine allows educators, researchers, and program staff to collect data using tablets or smartphones, then sync it when connectivity is available.', 'Tangerine is highly customizable—users can design their own surveys, assessments, and workflows to fit local needs. It supports audio playback, skip logic, and real-time data validation, helping ensure accurate and efficient data collection.'],
    blocks: [{
      type: 'feature',
      eyebrow: 'Foundational Literacy & Numeracy',
      heading: 'Surveys & assessments, built for the field',
      body: ['Tangerine is the core data collection tool within the suite, purpose-built for large-scale surveys and assessments in education. Offline functionality ensures reliable data capture, while secure syncing enables centralized analysis to help stakeholders monitor learning outcomes and inform policy decisions.'],
      image: '../../assets/imagery/task-report.png',
      wide: true
    }, {
      type: 'modules',
      cards: [{
        img: '../../assets/imagery/reading.jpg',
        title: 'Reading',
        body: 'Subtest modules used in foundational literacy assessments — letter-name recognition, oral reading fluency, and reading comprehension.'
      }, {
        img: '../../assets/imagery/math.jpg',
        title: 'Math',
        body: 'Modules for foundational numeracy — number identification, discrimination, basic operations, and word problems.'
      }, {
        img: '../../assets/imagery/school-surveys.jpg',
        title: 'School Surveys',
        body: 'Digitally administer interviews and questionnaires for students, parents, teachers, and leaders, plus environment inventories.'
      }]
    }],
    cta: {
      heading: 'Contact us to start your free trial today!',
      label: 'Get Started',
      to: 'trial'
    }
  },
  'p-teach': {
    key: 'p-teach',
    crumb: 'TANGERINE:TEACH',
    name: 'Tangerine:Teach',
    logo: '../../assets/product-logos/teach-logo.png',
    lead: ['Tangerine:Teach equips teachers and support staff with tools to monitor student attendance, behavior, and learning progress — directly in the classroom.'],
    blocks: [{
      type: 'feature',
      heading: 'Real-time insights to promote student success',
      body: ['Simple, color-coded dashboards highlight students who fall below expected thresholds across key indicators — making it easy to spot early signs of disengagement or academic struggle. This early-warning system enables timely interventions that can help prevent dropout and support retention.', 'In addition to classroom insights, Tangerine:Teach supports automated reporting and caregiver messaging, strengthening school-to-home communication.'],
      image: '../../assets/imagery/teach-1.png',
      caption: 'Trends in early-warning indicators for dropout prevention. Reports can be sent to caregivers via text or WhatsApp.'
    }, {
      type: 'feature',
      reverse: true,
      heading: 'Offline assessment for targeted instruction',
      body: ['Tangerine:Teach stores student data directly on each device, eliminating the need for an internet connection. It supports rapid, curriculum-based assessments that help educators identify whether students have mastered key skills, then automatically groups students by performance and recommends targeted instructional strategies.', 'In contexts where educators may face pressure or scrutiny based on results, local data ownership provides an added layer of protection and autonomy.'],
      image: '../../assets/imagery/teach-2.png',
      caption: 'The Grouping Table shows the percentile distribution of student performance — without an internet connection.',
      cta: {
        label: 'Get Started',
        to: 'trial'
      }
    }, {
      type: 'video',
      id: '96AtJMvMSHM',
      heading: 'Quality formative assessment at your fingertips'
    }],
    cta: {
      heading: 'Give educators a tool they can trust.',
      label: 'Get Started',
      to: 'trial'
    }
  },
  'p-coach': {
    key: 'p-coach',
    crumb: 'TANGERINE:COACH',
    name: 'Tangerine:Coach',
    logo: '../../assets/product-logos/coach-logo.png',
    lead: ['Tangerine:Coach equips coaches, tutors, and school support staff with flexible tools to support teachers more effectively.'],
    blocks: [{
      type: 'feature',
      heading: 'Elevating professional development',
      body: ['Using customizable, logic-driven forms, Tangerine:Coach captures and analyzes data from classroom observations, mini-assessments, and inventories. The platform generates offline coaching reports that provide actionable insights — helping guide meaningful, data-informed conversations with teachers.'],
      image: '../../assets/imagery/coach-math.png'
    }, {
      type: 'feature',
      reverse: true,
      heading: 'Tailored support',
      body: ['Tangerine:Coach is designed to flex and adapt to the unique needs of each project. Our team at Tangerine Central partners with you to customize the platform — ensuring it aligns with your goals, workflows, and local context. From initial setup to ongoing support, we’re here to help you make the most of it.'],
      image: '../../assets/imagery/coach-map.png',
      cta: {
        label: 'Contact Us',
        to: 'contact'
      }
    }, {
      type: 'video',
      id: '62VY-NXGm2U',
      heading: 'Supporting classroom excellence for educators'
    }],
    cta: {
      heading: 'Let’s tailor Tangerine:Coach to your program.',
      label: 'Contact Us',
      to: 'contact'
    }
  },
  'p-acuity': {
    key: 'p-acuity',
    crumb: 'TANGERINE:ACUITY',
    name: 'Tangerine:Acuity',
    logo: '../../assets/product-logos/acuity-logo.png',
    badge: 'Available globally early 2026',
    lead: ['Vision screening optimized for low-resource settings — screen individuals of any age, from pre-primary children through adulthood, in just 2–3 minutes per person.'],
    blocks: [{
      type: 'feature',
      heading: 'Enabling education for all',
      body: ['Students with undiagnosed disabilities — especially vision challenges — are at greater risk of falling behind. Tangerine:Acuity offers a simple, offline-capable screening tool optimized for Android devices and low-bandwidth environments, equipping educators with timely, actionable insights to support students who may be struggling due to undetected vision loss.'],
      image: '../../assets/imagery/acuity-screening.jpg'
    }, {
      type: 'feature',
      reverse: true,
      heading: 'Widely applicable',
      body: ['Designed for use across age groups and sectors — from early-childhood programs to adult education, and in settings like schools, health centers, and well-child visits. With minimal training and low implementation costs, screenings take just 2–3 minutes per person and work seamlessly in low-bandwidth environments.', 'Tangerine:Acuity will be available globally in early 2026 following final refinements.'],
      image: '../../assets/imagery/acuity-mockup.jpg',
      cta: {
        label: 'Contact Us',
        to: 'contact'
      }
    }, {
      type: 'video',
      id: 'WuKDOd1FsVY',
      heading: 'Helping ALL students achieve their potential'
    }],
    cta: {
      heading: 'See how Tangerine:Acuity can support your work.',
      label: 'Contact Us',
      to: 'contact'
    }
  }
};
window.TG_FAQS = [{
  cat: 'Compatibility & technical requirements',
  items: [{
    q: 'What are the minimum requirements for Android tablets to run Tangerine?',
    a: 'For generic data collection: a touch screen; Android 8.0+ (scanner, image, video and sound capture require Android 9.0+); an HTML5-capable browser with Android System WebView; Wi-Fi (b/g/n); 64GB storage; 4GB RAM; a 1.6GHz+ multi-core processor (dual minimum); 7+ hours of battery without internet; and the ability to install third-party APKs.'
  }, {
    q: 'Can I use Tangerine from a web browser on a computer?',
    a: 'Yes. Tangerine works from an APK on Android, and from Chrome or Edge in offline mode when installed as a Progressive Web App (PWA).'
  }, {
    q: 'How does the platform operate online and offline?',
    a: 'Online, forms can be used as direct links — no app install required, accessible from any device. Offline uses an installed APK or PWA. Tangerine is optimized for APK and Browser/PWA modes.'
  }, {
    q: 'How long does collected data take to sync once a connection is available?',
    a: 'It depends on connection speed, the number of pending records, and form size. For example, 10 EGRA assessments (~350k total) over a stable 4G connection sync in about 5 seconds.'
  }]
}, {
  cat: 'Managing tests & items',
  items: [{
    q: 'Can I set minimum or maximum response times per item or session?',
    a: 'Currently you can set timers with grid and EF Touch items. For others, custom code can enable per-item or per-section timers.'
  }, {
    q: 'Can these times be customized by group or student?',
    a: 'For grid and EF Touch items, times can\u2019t be changed by group via code, but you can create separate items per group and enable/disable them with conditional (skip) logic. Custom timers can also be built to vary by group or student.'
  }]
}, {
  cat: 'Data processing & delivery',
  items: [{
    q: 'How is non-response treated? Can it be parameterized?',
    a: 'Yes. A \u201cNo Response\u201d setting is configured at the platform level and applied to each group (not per group). For required items, you can add a \u201cNo answer\u201d option whose value is accessible from the form interface.'
  }, {
    q: 'What is the structure of exported files?',
    a: 'Results (rows) — each record is a single assessment or set of subtasks (in Tangerine:Teach). Item data (columns) — one or more columns per item indicate whether an answer was selected and its numeric value.'
  }, {
    q: 'What information is included in exports?',
    a: 'By default, the response value plus start/end date-time for the whole assessment; each section also records its start time, so per-page time can be derived. Other parameters can be added with custom code. In Teach, the percentage per item group, total score and points per section are included.'
  }]
}, {
  cat: 'Access management',
  items: [{
    q: 'How are student credentials generated and delivered?',
    a: 'Tangerine, Tangerine:Teach and Tangerine:Coach are configured for survey-takers, teachers and coaches. Self-administered, student-directed assessments let students or administrators enter a unique student ID, or have the system generate one.'
  }, {
    q: 'Can I mass-upload student data for testing?',
    a: 'Yes. Depending on use, data can populate drop-down lists (region, school, classroom) or, in Teach, serve as the source for class groups, teachers and schools.'
  }, {
    q: 'What user roles are available?',
    a: 'Roles are permission/action based rather than school-administrative. By default there are two — Administrator (all actions in their group) and Member (download CSV results). New roles with specific permissions can be added per group.'
  }]
}, {
  cat: 'Information security',
  items: [{
    q: 'How are security and confidentiality guaranteed?',
    a: 'All data access is password-protected on both server and device; only authenticated, authorized users can access data. On the server, each user is created by an authorized administrator. On devices, each user sets their own access details to protect locally stored information.'
  }, {
    q: 'Where is data stored?',
    a: 'All options are available. Our service uses AWS cloud, and we can offer alternatives per client needs — other cloud providers or local storage.'
  }]
}, {
  cat: 'Analysis, reports & feedback',
  items: [{
    q: 'Can the platform create reports by student, course or school?',
    a: 'Yes — reports can be created from compiled data in third-party systems like Power BI. There is no in-platform dashboard, but one could be developed (the infrastructure exists).'
  }, {
    q: 'What analysis or visualizations do you offer?',
    a: 'Tangerine is a data-collection platform; reporting and dashboards are normally done off-platform in Power BI or similar tools.'
  }, {
    q: 'Can results be exported to Excel, PDF or CSV?',
    a: 'Export is offered in CSV format, or via direct connection to the database.'
  }, {
    q: 'Is there real-time feedback for students and teachers?',
    a: 'It can be coded as needed — in Teach, through the subtask-level interface.'
  }, {
    q: 'What does the teacher report contain?',
    a: 'In Teach, teachers see classroom reports by task or subject showing students and achievement in percentage ranges, plus total performance per student. Teach also displays attendance, continuous assessment and behavior reports.'
  }, {
    q: 'Can you track learning across multiple assessments?',
    a: 'Yes — by consistently identifying students across successive applications you can compare results over time. This requires consistent student identifiers and appropriate data structure; longitudinal reports are generated off-platform (Excel, Power BI, etc.).'
  }]
}, {
  cat: 'Accessibility',
  items: [{
    q: 'Are there accessibility options for students with disabilities?',
    a: 'The platform supports videos showing questions in sign language, recording answers via sign-language video, audio recordings to read questions and answers aloud, and recording audio responses. Assessments are prepared per student needs; there is no automatic conversion of a generic assessment into an inclusive one.'
  }, {
    q: 'Can assessments be adapted for accessibility needs?',
    a: 'Yes — inclusive assessments are created by adapting the assessment for the student\u2019s needs.'
  }]
}, {
  cat: 'Integration',
  items: [{
    q: 'Can Tangerine integrate with an EMIS?',
    a: 'Yes. Integrating data with an EMIS is a separate effort in which experts from the organization or education department play a central, directing role.'
  }, {
    q: 'Are there APIs to facilitate integration?',
    a: 'Yes — APIs manage raw data, and we provide tools to transform or convert data to MySQL, where standard SQL works alongside your existing ETL tools.'
  }]
}, {
  cat: 'User experience & support',
  items: [{
    q: 'Is training required to use the interface?',
    a: 'It depends on the user\u2019s technical level. We recommend a one-hour session or a step-by-step reference sheet; apps can include multimedia instructions covering the basics.'
  }, {
    q: 'Does the platform provide error messages and alerts?',
    a: 'Yes — there are error messages and some alerts to guide users through technical failures or incorrect use.'
  }, {
    q: 'Is technical support available?',
    a: 'Yes, during CET (Central European Time) working hours.'
  }, {
    q: 'Can the interface and functionality be customized?',
    a: 'Tangerine is highly configurable — content and some functionality, including adaptive branching, curriculum-standard integration, and multilingual support. Some specific customizations may require additional development.'
  }]
}];
window.TG_TEAM = [{
  photo: '../../assets/team/carmen.png',
  name: 'Carmen Strigel',
  role: 'Co-Founder & Chief Executive Officer',
  bio: 'A lifelong advocate for data-driven decision-making and accessible education, Carmen created the Tangerine platform to support offline-first data collection and real-time monitoring in low-resource settings. As CEO she guides operations, strategy and innovation, and also serves as Senior Director, Center for Advanced Analytics and Visualization at RTI International.',
  linkedin: 'https://www.linkedin.com/in/carmen-strigel-830ba913/'
}, {
  photo: '../../assets/team/amber.png',
  name: 'Amber Gove',
  role: 'Co-Founder & Chief Impact Officer',
  bio: 'With two decades of education research and policy experience across 20+ countries, Amber co-developed the globally recognized Early Grade Reading Assessment (EGRA) and the open-source Tangerine platform. As Chief Impact Officer she leads strategy to expand reach and deepen impact, bridging research, policy and practice.',
  linkedin: 'https://www.linkedin.com/in/amber-gove/'
}, {
  photo: '../../assets/team/lachezar.png',
  name: 'Lachezar Hristov',
  role: 'Head of Implementation',
  bio: 'A technologist and product leader with 15+ years across education, health and agriculture, Lachko has led the design, deployment and support of Tangerine\u2019s ecosystem across 50+ projects. He guides configuration, testing and rollout globally and continues as a Senior Technical Advisor at RTI.',
  linkedin: 'https://www.linkedin.com/in/lachko-hristov/'
}, {
  photo: '../../assets/team/anthony.png',
  name: 'Anthony Udeh',
  role: 'AI Advisor',
  bio: 'An EdTech and ICT4D specialist with a decade advancing digital learning and AI-enabled assessment across Africa and Asia. Tony supports platform implementation, system integration and partner capacity to scale data-driven learning solutions.',
  linkedin: 'https://www.linkedin.com/in/anthony-udeh-28ab95113/'
}, {
  photo: '../../assets/team/jovina.png',
  name: 'Jovina Tibenda',
  role: 'Tanzania Country Director',
  bio: 'Jovina brings extensive experience in education systems strengthening, digital learning and program implementation across decentralized contexts. She serves as Country Director for Tanzania while supporting regional implementation and local capacity building.',
  linkedin: 'https://www.linkedin.com/in/jovina-tibenda-794b03272/'
}, {
  photo: '../../assets/team/alastair.png',
  name: 'Alastair Rodd',
  role: 'Senior Advisor',
  bio: 'A senior education advisor experienced in systems strengthening, foundational learning and large-scale program implementation across Africa and Asia. Alastair provides senior technical leadership on scaling data use and improving learning outcomes.',
  linkedin: 'https://www.linkedin.com/in/alastair-rodd/'
}];
window.TG_PRINCIPLES = [{
  title: 'Data sovereignty & security',
  body: 'Programs own and control their data, protected on both server and device.'
}, {
  title: 'Adaptability & simplicity',
  body: 'Highly configurable instruments and workflows that stay simple to use in the field.'
}, {
  title: 'Community-driven development',
  body: 'Open-source and shaped by a global community of users and contributors.'
}];
window.TG_PRICING = [{
  name: 'Free',
  price: 'Free',
  period: '',
  results: '2,000 results stored on server',
  support: 'Limited email support',
  features: ['Unlimited users / reviewers'],
  cta: 'Start free trial'
}, {
  name: 'Member',
  price: '$3,500',
  period: 'per year',
  results: '10,000 results stored on server',
  support: 'Email support within 2 days',
  features: ['Unlimited users / reviewers', 'Dedicated site'],
  cta: 'Get started'
}, {
  name: 'Premium',
  price: '$5,000',
  period: 'per year',
  featured: true,
  results: '25,000 results stored on server',
  support: 'Email support within 1 day',
  features: ['Unlimited users / reviewers', 'Dedicated site'],
  cta: 'Get started'
}, {
  name: 'Pro',
  price: '$6,000',
  period: 'per year',
  results: 'Unlimited results stored on server',
  support: 'Email support within 1 day',
  features: ['Unlimited users / reviewers', 'Dedicated site'],
  cta: 'Get started'
}, {
  name: 'Custom',
  price: 'Custom',
  period: 'pricing',
  results: 'Unlimited results stored on server',
  support: 'Email support within 1 day',
  features: ['Unlimited users / reviewers', 'Dedicated site', 'Tangerine:Teach', 'Tangerine:Coach'],
  cta: 'Contact us'
}];
window.TG_STORIES = [{
  tag: '/school-to-school',
  org: 'School-to-School International',
  title: 'Tablets are in, paper is out: embracing electronic data collection',
  body: 'How a global research organization moved field assessments from paper to Tangerine — cutting turnaround and improving data quality.'
}, {
  tag: '/central-square-foundation',
  org: 'Central Square Foundation',
  title: 'System-led assessment at scale in India',
  body: 'Deploying Tangerine to support large-scale, system-led learning assessment across Indian states.'
}];

// Help articles — keyed by slug; order defines the Help index grid
window.TG_HELP = {
  'getting-started': {
    title: 'Getting started',
    summary: 'Set up your first group, design an assessment, and collect your first records on a tablet.',
    intro: 'New to Tangerine? This walks you from an empty workspace to your first synced records. The whole flow works offline — you only need a connection to sync.',
    sections: [{
      h: 'From zero to first record',
      steps: ['Get access — start a free trial or sign in to your hosted Tangerine instance.', 'Create a group. Groups organize your instruments, users, and results for a project, region, or study.', 'Build or import an assessment (see Building instruments) — or start from a template.', 'Install Tangerine on your device: either the Android APK, or the browser PWA via Chrome or Edge for offline use.', 'Collect data in the field. Everything is stored on the device, so no connection is required.', 'Sync when you reconnect. Records upload to your secure server for centralized analysis.']
    }, {
      h: 'What you\u2019ll need',
      list: ['An Android tablet or smartphone (Android 8.0+; 9.0+ for image, video, audio and scanner capture).', 'A Tangerine instance — hosted by Tangerine Central, or self-hosted.', 'Roughly one hour of orientation, or a one-page reference sheet, for new data collectors.']
    }]
  },
  'syncing-offline': {
    title: 'Syncing & offline',
    summary: 'How offline storage works and how data syncs to secure servers when you reconnect.',
    intro: 'Tangerine is offline-first: data is captured and stored directly on each device, then synced when a connection is available. This is what makes it reliable in remote and low-bandwidth settings.',
    sections: [{
      h: 'Two ways to run',
      list: ['APK (Android app) — installed from an APK file; the recommended mode for field collection.', 'Browser PWA — installed from Chrome or Edge and run offline. Tangerine is optimized for both.', 'Online forms — used as direct links with no install, accessible from any device.']
    }, {
      h: 'How syncing works',
      p: ['While offline, every record is held safely on the device. When connectivity returns, pending records upload to your server automatically.', 'Sync speed depends on connection quality, the number of pending records, and form size. As a benchmark, 10 EGRA assessments (~350k total) over a stable 4G connection sync in about 5 seconds.']
    }]
  },
  'building-instruments': {
    title: 'Building instruments',
    summary: 'Skip logic, audio playback, timed items, and real-time validation for custom surveys.',
    intro: 'Tangerine is highly customizable — design assessments, surveys, interviews and observation forms that fit your local context.',
    sections: [{
      h: 'What you can build',
      list: ['Timed and untimed items, including grid and EF Touch item types with built-in timers.', 'Skip logic and conditional branching to tailor the flow per respondent.', 'Audio playback to read prompts aloud, plus image, video and audio capture (Android 9.0+).', 'Real-time validation to catch errors as data is entered.', 'Multilingual instruments — Tangerine has been used in 100+ languages.']
    }, {
      h: 'Accessibility',
      p: ['Inclusive assessments are created by adapting an instrument to a student\u2019s needs — for example sign-language video prompts, sign-language video responses, audio narration, and audio responses. There is no automatic conversion of a generic assessment into an inclusive one.']
    }]
  },
  'reports-export': {
    title: 'Reports & export',
    summary: 'Read dashboards, group students by performance, and export data for analysis.',
    intro: 'Tangerine is a data-collection platform; rich reporting and dashboards are typically built off-platform from your exported data.',
    sections: [{
      h: 'Exporting your data',
      list: ['Export in CSV format, or connect directly to the database.', 'Results are rows — each record is a single assessment or set of subtasks (in Teach).', 'Item data is in columns — indicating whether an answer was selected and its numeric value.', 'By default each export includes the response value and the start/end date-time; per-section start times let you derive time spent per page.']
    }, {
      h: 'Dashboards & longitudinal tracking',
      p: ['Build dashboards and visualizations in tools like Power BI. In Tangerine:Teach, teachers also see in-app classroom reports by task or subject, with achievement in percentage ranges and totals per student.', 'Track learning over time by keeping student identifiers consistent across successive applications, then generate longitudinal reports off-platform (Excel, Power BI, or other analytics tools).']
    }]
  },
  'data-privacy': {
    title: 'Data & privacy',
    summary: 'Local data ownership, account roles, and keeping your program\u2019s data secure.',
    intro: 'Tangerine is built around data sovereignty: programs own and control their data, with protection on both the server and the device.',
    sections: [{
      h: 'Security',
      list: ['All data access is password-protected on both server and device; only authenticated, authorized users get in.', 'On the server, each user is created by an authorized administrator.', 'On devices, each user sets their own access details to protect locally stored data.']
    }, {
      h: 'Storage & roles',
      p: ['All storage options are available — our service uses AWS cloud, and we can offer other cloud providers or local storage to fit your requirements.', 'Roles are permission-based: by default Administrator (all actions within their group) and Member (download CSV results). New roles with specific permissions can be added per group.']
    }]
  },
  'community': {
    title: 'Community',
    summary: 'Tangerine is open-source — connect with contributors and the wider community.',
    intro: 'The core software is free and open to all, available under the GNU General Public License. A global community shapes how it evolves.',
    sections: [{
      h: 'Get involved',
      list: ['Access the source code and documentation on GitHub.', 'If you modify the code, share your changes back with the community (GNU GPL).', 'Subscribers join a global peer community of Tangerine users.', 'Contribute to and use a shared instrument library (coming soon).']
    }, {
      h: 'Source code',
      p: ['Tangerine\u2019s open nature lets you host the platform on your own server and adapt its code to your needs. Explore the repositories to get started.'],
      link: {
        label: 'Tangerine on GitHub',
        href: 'https://github.com/Tangerine-Community/'
      }
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/help-variants.jsx
try { (() => {
// Help-article design explorations — three takes on the "Syncing & offline" article.
// All use the same Tangerine tokens (Baloo 2 / Mulish, tangerine + gold, radii, shadows).
const ART = () => window.TG_HELP['syncing-offline'];
const TOPICS = () => Object.entries(window.TG_HELP);

/* =====================================================================
   A · CURRENT — the live article style (mk-article classes)
   ===================================================================== */
function HelpVariantCurrent() {
  const art = ART();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-breadcrumb"
  }, "HOME > HELP > ", /*#__PURE__*/React.createElement("strong", null, art.title.toUpperCase())), /*#__PURE__*/React.createElement("article", {
    className: "mk-article",
    style: {
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "tg-eyebrow"
  }, "Help"), /*#__PURE__*/React.createElement("h1", null, art.title), /*#__PURE__*/React.createElement("p", {
    className: "mk-article__intro"
  }, art.intro), art.sections.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: i,
    className: "mk-article__sec"
  }, /*#__PURE__*/React.createElement("h2", null, s.h), s.p && s.p.map((p, j) => /*#__PURE__*/React.createElement("p", {
    key: j
  }, p)), s.list && /*#__PURE__*/React.createElement("ul", {
    className: "mk-article__list"
  }, s.list.map((t, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "mk-article__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-link"
  }, "\u2190 All help topics"), /*#__PURE__*/React.createElement("span", {
    className: "mk-link"
  }, "Next: Building instruments \u2192"))));
}

/* =====================================================================
   B · PROFESSIONAL — docs layout: sticky topic sidebar + "on this page"
   ===================================================================== */
const proCss = {
  page: {
    display: 'grid',
    gridTemplateColumns: '232px 1fr',
    minHeight: '100%',
    background: 'var(--surface-card)',
    fontFamily: 'var(--font-sans)'
  },
  side: {
    borderRight: '1px solid var(--border-subtle)',
    padding: 'var(--space-6) var(--space-4)',
    background: 'var(--neutral-50)'
  },
  sideLabel: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 'var(--text-xs)',
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: 'var(--text-subtle)',
    marginBottom: 'var(--space-3)'
  },
  navItem: {
    display: 'block',
    padding: '8px 12px',
    borderRadius: 'var(--radius-sm)',
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    color: 'var(--text-body)',
    marginBottom: 2,
    borderLeft: '2px solid transparent'
  },
  navActive: {
    background: 'var(--tangerine-50)',
    color: 'var(--tangerine-700)',
    borderLeft: '2px solid var(--tangerine-500)'
  },
  main: {
    padding: 'var(--space-7) var(--space-8)',
    maxWidth: 760
  },
  crumb: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    color: 'var(--text-muted)',
    letterSpacing: '.04em',
    marginBottom: 'var(--space-4)'
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-4xl)',
    color: 'var(--text-strong)',
    margin: '0 0 12px',
    letterSpacing: '-0.01em'
  },
  meta: {
    display: 'flex',
    gap: 16,
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    color: 'var(--text-muted)',
    paddingBottom: 'var(--space-5)',
    marginBottom: 'var(--space-5)',
    borderBottom: '1px solid var(--border-subtle)'
  },
  intro: {
    fontSize: 'var(--text-lg)',
    color: 'var(--text-body)',
    lineHeight: 1.6,
    marginBottom: 'var(--space-6)'
  },
  sec: {
    marginBottom: 'var(--space-6)',
    scrollMarginTop: 20
  },
  h2: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 'var(--text-xl)',
    color: 'var(--text-strong)',
    margin: '0 0 var(--space-3)',
    paddingLeft: 14,
    borderLeft: '3px solid var(--tangerine-500)'
  },
  p: {
    color: 'var(--text-body)',
    lineHeight: 1.65,
    margin: '0 0 12px'
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  },
  li: {
    position: 'relative',
    padding: '10px 0 10px 26px',
    borderBottom: '1px solid var(--neutral-100)',
    color: 'var(--text-body)',
    lineHeight: 1.5,
    fontSize: 'var(--text-sm)'
  },
  foot: {
    display: 'flex',
    gap: 12,
    marginTop: 'var(--space-7)'
  },
  footCard: {
    flex: 1,
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    padding: '12px 16px',
    cursor: 'pointer'
  },
  footLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    color: 'var(--text-subtle)',
    textTransform: 'uppercase',
    letterSpacing: '.06em'
  },
  footTitle: {
    fontWeight: 700,
    color: 'var(--tangerine-600)',
    fontSize: 'var(--text-sm)',
    marginTop: 2
  }
};
function HelpVariantPro() {
  const art = ART();
  return /*#__PURE__*/React.createElement("div", {
    style: proCss.page
  }, /*#__PURE__*/React.createElement("aside", {
    style: proCss.side
  }, /*#__PURE__*/React.createElement("div", {
    style: proCss.sideLabel
  }, "Help topics"), /*#__PURE__*/React.createElement("nav", null, TOPICS().map(([slug, a]) => /*#__PURE__*/React.createElement("span", {
    key: slug,
    style: {
      ...proCss.navItem,
      ...(slug === 'syncing-offline' ? proCss.navActive : {})
    }
  }, a.title)))), /*#__PURE__*/React.createElement("main", {
    style: proCss.main
  }, /*#__PURE__*/React.createElement("div", {
    style: proCss.crumb
  }, "Help / ", art.title), /*#__PURE__*/React.createElement("h1", {
    style: proCss.h1
  }, art.title), /*#__PURE__*/React.createElement("div", {
    style: proCss.meta
  }, /*#__PURE__*/React.createElement("span", null, "UPDATED JUN 2026"), /*#__PURE__*/React.createElement("span", null, "3 MIN READ"), /*#__PURE__*/React.createElement("span", null, "OFFLINE-FIRST")), /*#__PURE__*/React.createElement("p", {
    style: proCss.intro
  }, art.intro), art.sections.map((s, i) => /*#__PURE__*/React.createElement("section", {
    key: i,
    style: proCss.sec
  }, /*#__PURE__*/React.createElement("h2", {
    style: proCss.h2
  }, s.h), s.p && s.p.map((p, j) => /*#__PURE__*/React.createElement("p", {
    key: j,
    style: proCss.p
  }, p)), s.list && /*#__PURE__*/React.createElement("ul", {
    style: proCss.ul
  }, s.list.map((t, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: proCss.li
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      color: 'var(--tangerine-500)',
      fontWeight: 700
    }
  }, "\u203A"), t))))), /*#__PURE__*/React.createElement("div", {
    style: proCss.foot
  }, /*#__PURE__*/React.createElement("div", {
    style: proCss.footCard
  }, /*#__PURE__*/React.createElement("div", {
    style: proCss.footLabel
  }, "\u2190 Previous"), /*#__PURE__*/React.createElement("div", {
    style: proCss.footTitle
  }, "Getting started")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...proCss.footCard,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: proCss.footLabel
  }, "Next \u2192"), /*#__PURE__*/React.createElement("div", {
    style: proCss.footTitle
  }, "Building instruments")))));
}

/* =====================================================================
   C · FUN — editorial: gradient hero, chunky cards, illustration, chips
   ===================================================================== */
const funCss = {
  page: {
    background: 'var(--surface-page)',
    minHeight: '100%',
    fontFamily: 'var(--font-sans)',
    paddingBottom: 'var(--space-8)'
  },
  hero: {
    background: 'var(--gradient-brand-diag)',
    padding: 'var(--space-8) var(--space-7) var(--space-9)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden'
  },
  heroArt: {
    position: 'absolute',
    right: -10,
    bottom: -20,
    width: 200,
    height: 200,
    opacity: 0.9
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: 'var(--text-xs)',
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    color: 'var(--gold-200)'
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-5xl)',
    margin: '8px 0 12px',
    lineHeight: 1,
    maxWidth: '14ch',
    color: '#fff'
  },
  heroSub: {
    fontSize: 'var(--text-lg)',
    color: 'rgba(255,255,255,.92)',
    maxWidth: '46ch',
    lineHeight: 1.5
  },
  chips: {
    display: 'flex',
    gap: 8,
    marginTop: 'var(--space-5)',
    flexWrap: 'wrap'
  },
  chip: {
    background: 'rgba(255,255,255,.18)',
    color: '#fff',
    borderRadius: 'var(--radius-pill)',
    padding: '6px 14px',
    fontSize: 'var(--text-sm)',
    fontWeight: 700,
    backdropFilter: 'blur(4px)'
  },
  body: {
    maxWidth: 760,
    margin: '0 auto',
    padding: '0 var(--space-6)',
    marginTop: '-40px',
    position: 'relative'
  },
  card: {
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-7)',
    boxShadow: 'var(--shadow-lg)',
    marginBottom: 'var(--space-5)'
  },
  cardH: {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--text-2xl)',
    color: 'var(--text-strong)',
    margin: '0 0 var(--space-4)',
    display: 'flex',
    alignItems: 'center',
    gap: 12
  },
  badgeNum: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'var(--gradient-brand)',
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 18,
    flex: 'none',
    boxShadow: 'var(--shadow-brand)'
  },
  p: {
    color: 'var(--text-body)',
    lineHeight: 1.65,
    margin: '0 0 12px',
    fontSize: 'var(--text-md)'
  },
  pills: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 4
  },
  pill: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    background: 'var(--tangerine-50)',
    borderRadius: 'var(--radius-lg)',
    padding: '12px 16px',
    color: 'var(--neutral-800)',
    fontSize: 'var(--text-sm)',
    lineHeight: 1.5,
    fontWeight: 500
  },
  pillCheck: {
    flex: 'none',
    width: 22,
    height: 22,
    borderRadius: '50%',
    background: 'var(--tangerine-500)',
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 700
  },
  tip: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    background: 'var(--gold-50)',
    border: '2px dashed var(--gold-300)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--space-5)',
    marginBottom: 'var(--space-5)'
  },
  tipArt: {
    width: 64,
    height: 64,
    flex: 'none'
  },
  nav: {
    display: 'flex',
    gap: 12,
    marginTop: 'var(--space-6)'
  },
  navBtn: {
    flex: 1,
    borderRadius: 'var(--radius-xl)',
    padding: '16px 20px',
    background: 'var(--surface-card)',
    boxShadow: 'var(--shadow-sm)',
    cursor: 'pointer',
    border: '2px solid var(--tangerine-100)'
  },
  navLabel: {
    fontSize: 11,
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '.06em',
    color: 'var(--gold-600)'
  },
  navTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--tangerine-700)',
    fontSize: 'var(--text-lg)',
    marginTop: 2
  }
};
function HelpVariantFun() {
  const art = ART();
  return /*#__PURE__*/React.createElement("div", {
    style: funCss.page
  }, /*#__PURE__*/React.createElement("header", {
    style: funCss.hero
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/cloud.png",
    alt: "",
    style: funCss.heroArt
  }), /*#__PURE__*/React.createElement("div", {
    style: funCss.eyebrow
  }, "Help \xB7 Guides"), /*#__PURE__*/React.createElement("h1", {
    style: funCss.h1
  }, art.title), /*#__PURE__*/React.createElement("p", {
    style: funCss.heroSub
  }, art.summary), /*#__PURE__*/React.createElement("div", {
    style: funCss.chips
  }, /*#__PURE__*/React.createElement("span", {
    style: funCss.chip
  }, "Offline-first"), /*#__PURE__*/React.createElement("span", {
    style: funCss.chip
  }, "Android & PWA"), /*#__PURE__*/React.createElement("span", {
    style: funCss.chip
  }, "Auto-sync"))), /*#__PURE__*/React.createElement("div", {
    style: funCss.body
  }, /*#__PURE__*/React.createElement("div", {
    style: funCss.tip
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/brain.png",
    alt: "",
    style: funCss.tipArt
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--neutral-800)',
      lineHeight: 1.55
    }
  }, art.intro)), art.sections.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: funCss.card
  }, /*#__PURE__*/React.createElement("h2", {
    style: funCss.cardH
  }, /*#__PURE__*/React.createElement("span", {
    style: funCss.badgeNum
  }, i + 1), s.h), s.p && s.p.map((p, j) => /*#__PURE__*/React.createElement("p", {
    key: j,
    style: funCss.p
  }, p)), s.list && /*#__PURE__*/React.createElement("div", {
    style: funCss.pills
  }, s.list.map((t, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: funCss.pill
  }, /*#__PURE__*/React.createElement("span", {
    style: funCss.pillCheck
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, t)))))), /*#__PURE__*/React.createElement("div", {
    style: funCss.nav
  }, /*#__PURE__*/React.createElement("div", {
    style: funCss.navBtn
  }, /*#__PURE__*/React.createElement("div", {
    style: funCss.navLabel
  }, "\u2190 Previous"), /*#__PURE__*/React.createElement("div", {
    style: funCss.navTitle
  }, "Getting started")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...funCss.navBtn,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: funCss.navLabel
  }, "Up next \u2192"), /*#__PURE__*/React.createElement("div", {
    style: funCss.navTitle
  }, "Building instruments")))));
}
Object.assign(window, {
  HelpVariantCurrent,
  HelpVariantPro,
  HelpVariantFun
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/help-variants.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

})();
