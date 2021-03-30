import config from "./config.js";

function fullStackKurs(tehnologija, ime) {
    if(tehnologija == 'front' || tehnologija == 'back') {
        console.log(`${config[tehnologija]} ${ime}`);
    } else {
        console.log('Nije unesen predavac');
    }
}
/// funkcionalnost

export default fullStackKurs;