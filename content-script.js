// ferret One のクリックイベント計測のトリガー属性を削除
const removeDataHuEventAttr = () => {
  const elements = document.querySelectorAll('[data-hu-event]');
  [...elements].forEach(node => {
    node.removeAttribute('data-hu-event');
  });
}

// ferret One 管理画面以外では、data-hu-event 属性を削除
if (location.hostname !== 'app.ferret-one.com') {
  removeDataHuEventAttr();
}
