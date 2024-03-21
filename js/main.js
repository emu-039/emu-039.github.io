$(function(){

    /* JS-画像のフェードイン
    ===================================================*/
    const targets = document.getElementsByClassName('fade');
    for(let i = targets.length; i--;){
     let observer = new IntersectionObserver((entries, observer) => {
      for(let j = entries.length; j--;){
       if (entries[j].isIntersecting) {
        entries[j].target.classList.add('active');
       } else{
        entries[j].target.classList.remove('active');
       }
      }
     });
     observer.observe(targets[i]);
    }


    /* ハンバーガーメニュー
    ===================================================*/
    // ハンバーガーメニューを開閉する<input id="nav-input" type="checkbox" class="nav-unshown">を取得（ここがcheckedになるとハンバーガーメニューが開く）
    const navInput = document.getElementById('nav-input')
    
    // ハンバーガーメニューの中、リンクタグを全部取得
    const hamburger = document.querySelectorAll('.sp-navi__navi li a')
    
    // 返り値は Array ではなく NodeListなので、配列にする（多分しなくてもいいforEach() メソッドを使うので）
    const hamburgerA = Array.from(hamburger)
    
    // forEachで回す
    hamburgerA.forEach( function(element) {
      // ハンバーガーメニュー内のリンクタグをクリックしたら
      element.addEventListener('click',function(){
        // ハンバーガーメニューのcheckedを外す
        navInput.checked = false
      })
    })
  
    /* トップに戻る
    ===================================================*/
    let pagetop = $('#to-top');
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    pagetop.hide();
  
    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function() {
      // スクロール位置が700pxを超えた場合
      if ($(this).scrollTop() > 700) {
        // トップに戻るボタンを表示する
        pagetop.fadeIn();
  
      // スクロール位置が700px未満の場合
      } else {
        // トップに戻るボタンを非表示にする
        pagetop.fadeOut();
      }
    });
  
    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function() {
      // 0.8秒かけてページトップへ移動
      $('body,html').animate({scrollTop: 0}, 800);
  
      // イベントが親要素へ伝播しないための記述
      // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
      return false;
    });

    /* index内のスムーススクロール
    =================================================== */
    const scorrllLinks = document.querySelectorAll('a[href^="#"]');
    scorrllLinks.forEach((scorrllLink) => {
      scorrllLink.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefLink = scorrllLink.getAttribute("href");
        const targetContent = document.getElementById(hrefLink.replace("#", ""));
        const rectTop = targetContent.getBoundingClientRect().top;
        const positionY = window.pageYOffset;
        const target = rectTop + positionY;
        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      });
    });


    /* 別ページからのindexのスムーススクロール
    ===================================================*/
    $(function(){
      //現在のページURLのハッシュ部分を取得
      const hash = location.hash;
    
      //ハッシュ部分がある場合の条件分岐
      if(hash){
        //ページ遷移後のスクロール位置指定
        $("html, body").stop().scrollTop(0);
        //処理を遅らせる
        setTimeout(function(){
          //リンク先を取得
          const target = $(hash),
          //リンク先までの距離を取得
          position = target.offset().top;
          //指定の場所までスムーススクロール
          $("html, body").animate({scrollTop:position}, 800, "swing");
        });
      }
    });












  });