const DynamicCheckboxes = {
  checkboxes: document.querySelectorAll('.table td input[type="checkbox"]'),
  selectAllTarget: document.querySelector('.js-select-all'),
  clearBtn: document.querySelector('.js-clear'),

  initialize() {
    this.shiftToSelect();
    this.selectAll();
    this.clearChecked();
    this.showRemoveCheckedButton();
  },

  shiftToSelect() {
    const checkboxes = this.checkboxes;
    let lastChecked;

    function handleCheck(event) {
      // Check if shift key is down and check if checkbox is checked
      let inBetween = false;
      if (event.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
          if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
          }

          if (inBetween) {
            checkbox.checked = true;
          }
        });
      }
      lastChecked = this;
    }

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck, false));
  },

  selectAll() {
    function handleSelectAll(event) {
      this.checkboxes.forEach(checkbox => {
        checkbox.checked ? (checkbox.checked = false) : (checkbox.checked = true)
      })
    }

    this.selectAllTarget.addEventListener('click', handleSelectAll.bind(this), false)
  },

  showRemoveCheckedButton() {
    this.clearBtnDisplay('none')
    document.addEventListener('change', this.showBtn.bind(this))
  },

  showBtn(event) {
    const checkboxesChecked = document.querySelectorAll('.table td input[type=checkbox]:checked').length

    if (checkboxesChecked > 0) {
      this.clearBtn.querySelector('span').textContent = checkboxesChecked;
      this.clearBtnDisplay('block');
    } else {
      this.clearBtn.querySelector('span').textContent = '';
      this.clearBtnDisplay('none');
    }
  },

  clearBtnDisplay(state) {
    this.clearBtn.style.display = state;
  },

  clearChecked() {
    this.clearBtn.addEventListener('click', removeChecked.bind(this), false);

    function removeChecked() {
      this.checkboxes.forEach(checkbox => (checkbox.checked = false));
      this.selectAllTarget.checked = false;
      this.clearBtnDisplay('none');
    }
  }

};

DynamicCheckboxes.initialize();