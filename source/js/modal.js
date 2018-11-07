var name1 = document.querySelector(".name__user");
  function modal_none(a){
    document.getElementById(a).style.display = "none";
  }

  function modal_block(a){
    document.getElementById(a).style.display = "block";
  }

  function form_submit(){
    if (!name1.value) {
    modal_block("gap-id")
    } else{
    modal_block("modal-id")
    }
  }
