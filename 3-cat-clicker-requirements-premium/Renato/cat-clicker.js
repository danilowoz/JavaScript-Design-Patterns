var cats = [
  {
    title: 'Gatinho feio',
    url: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426'
  },
  {
    title: 'Gato bonito',
    url: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'
  },
  {
    title: 'Gato lindão',
    url: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454'
  }
];
var div = document.createElement('div');
var ul = document.createElement('ul');
var div2 = document.createElement('div');
var img2 = document.createElement('img');

cats.forEach(function iterator(cat) {
    var img = document.createElement('img');
    var span = document.createElement('span');
    var input = document.createElement('input');
    var li = document.createElement('li');
  
    div.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(span);
    input.value = 0;
    input.disabled = true;
    img.src = cat.url;
    span.innerText = cat.title;
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(input);
    var catsList = document.getElementById('cats-list');
    catsList.appendChild(div);
    img.addEventListener('click', function handler(event) {                    
        img2.src = '';
        input.value++;
        document.body.appendChild(div2);
        div2.appendChild(img2);
        img2.src = img.src;
    });
});