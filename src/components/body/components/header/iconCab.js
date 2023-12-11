
export const iconCab = (button, buttonX, active) => {
    if (active) {
        button.style.display =  'none';
        buttonX.style.display = 'block';
    } else {
        button.style.display =  'block';
        buttonX.style.display = 'none';
    }
}

