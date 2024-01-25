const hidden = 'hidden';

function hide(button) {
    button.classList.add(hidden);
}

function show(button) {
    button.classList.remove(hidden);
}

function enable(button, loader) {
    loader.classList.add(hidden);
    button.disabled = false;
}

function disable(button, loader) {
    loader.classList.remove(hidden);
    button.disabled = true;
}

export default { hide, show, enable, disable };
