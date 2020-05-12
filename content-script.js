// ferret One のクリックイベント計測のトリガー属性を削除
const elements = document.querySelectorAll('[data-hu-event]');
[...elements].forEach(node => {
  node.removeAttribute('data-hu-event');
});