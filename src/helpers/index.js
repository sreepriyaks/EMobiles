export async function encodeImageFileAsURL(file) {
  var reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      return resolve(reader.result);
    }
  });
}

export function extractFormData(form) {
  return new Promise((resolve, reject) => {
    const phone = {};
    let data = new FormData(form);
    let image = data.get('image');
    encodeImageFileAsURL(image)
      .then(result => {
        phone.name = data.get('name') || 'No Name';
        phone.description = data.get('description') || 'No description';
        phone.categoryId = 'TestID';
        phone.price = data.get('price') || '0';
        phone.cpu = data.get('cpu') || 'NIL';
        phone.camera = data.get('camera') || 'NIL';
        phone.size = data.get('size') || 'NA';
        phone.weight = data.get('weight') || 'NA';
        phone.display = data.get('display') || 'NIL';
        phone.battery = data.get('battery') || 'NIL';
        phone.memory = data.get('memory') || 'NIL';
        phone.image = result;
        return resolve(phone);
      });
  });
}