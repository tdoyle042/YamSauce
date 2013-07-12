 // Contains test data

 var test_messages = 
 {messages: [
  {
    from: "Salem Hilal",
    avatar: "img/salem-avatar.jpg",
    to: "Yammer Engineering",
    time: "Jul. 19th, 2:37pm",
    content: "Put a bird on it blog banjo kitsch, Godard you probably haven't heard of them Marfa hoodie aesthetic selvage wolf meggings sustainable. Etsy keytar vinyl, next level thundercats authentic Carles actually Portland cray craft beer hoodie. Cred DIY Cosby sweater church-key, flannel bicycle rights Carles wayfarers forage. Yr banh mi swag, Bushwick wolf food truck High Life Truffaut hella farm-to-table single-origin coffee. Wolf pickled Schlitz ethical before they sold out whatever, umami gluten-free shoreditch bicycle rights squid Carles.",
    likes: 12,
    likes_string: function() {
      console.log(this.likes)
      if(this.likes === 1)
        return "Like";
      else
        return "Likes";
    },
    comments: [
      { from: "Channing Tatum", time: "Yesterday", content: "If I weren't Channing Tatum I'd hate it." }, 
      { from: "Mos Def", time: "Slightly later", content: "Mos def." }, 
      { from: "Tommy or Schallert or someone", time: "Jul. 11, 2:57", content: "Everyone go home." }
    ]
  },
  {
    from: "Salem Hilal",
    avatar: "img/salem-avatar.jpg",
    to: "Yammer Engineering",
    time: "Jul. 19th, 2:37pm",
    content: "Bespoke Wes Anderson plaid authentic, tote bag meh master cleanse Truffaut helvetica Odd Future pug ugh Pinterest church-key sriracha. PBR dreamcatcher gastropub, asymmetrical four loko umami Etsy raw denim biodiesel tumblr Cosby sweater roof party master cleanse. Etsy keytar vinyl, next level thundercats authentic Carles actually Portland cray craft beer hoodie. Cred DIY banh mi swag, Bushwick wolf food truck High Life Truffaut hella farm-to-table single-origin coffee. Wolf pickled Schlitz ethical before they sold out whatever, umami gluten-free shoreditch bicycle rights squid Carles.",
    likes: 12,
    likes_string: function() {
      if(this.likes === 1)
        return "Like";
      else
        return "Likes";
    },
    comments: [
      { from: "Channing Tatum", time: "Yesterday", content: "If I weren't Channing Tatum I'd hate it." }, 
      { from: "Jacques Greene", time: "Jul. 11, 2:37pm", content: "You probably haven't heard of me." }, 
      { from: "Tommy or Schallert or someone", time: "Jul. 11, 2:57", content: "Everyone go home." }
    ]
  },
  {
    from: "Salem Hilal",
    avatar: "img/salem-avatar.jpg",
    to: "Yammer Engineering",
    time: "Jul. 19th, 2:37pm",
    content: "Put a bird on it blog banjo kitsch, Godard you probably haven't heard of them Marfa hoodie aesthetic selvage wolf meggings sustainable. Bespoke Wes Anderson plaid authentic, tote bag meh master cleanse Truffaut helvetica Odd Future pug ugh Pinterest church-key sriracha. Etsy keytar vinyl, next level thundercats authentic Carles actually Portland cray craft beer hoodie.",
    likes: 12,
    likes_string: function() {
      if(this.likes === 1)
        return "Like";
      else
        return "Likes";
    },
    comments: [
      { from: "Channing Tatum", time: "Yesterday", content: "If I weren't Channing Tatum I'd hate it." }, 
      { from: "Jacques Greene", time: "Jul. 11, 2:37pm", content: "You probably haven't heard of me." }, 
      { from: "Skrillex", time: "Jul. 11, 2:39pm", content: "...what" }, 
      { from: "Tommy or Schallert or someone", time: "Jul. 11, 2:57", content: "Everyone go home." }
    ]
  },
  {
    from: "Salem Hilal",
    avatar: "img/salem-avatar.jpg",
    to: "Yammer Engineering",
    time: "Jul. 19th, 2:37pm",
    content: "Put a bird on it blog banjo kitsch, Godard you probably haven't heard of them Marfa hoodie aesthetic selvage wolf meggings sustainable. Bespoke Wes Anderson plaid authentic, tote bag meh master cleanse Truffaut helvetica Odd Future pug ugh Pinterest church-key sriracha. PBR dreamcatcher gastropub, asymmetrical four loko umami Etsy raw denim biodiesel tumblr Cosby sweater roof party master cleanse. Etsy keytar vinyl, next level thundercats authentic Carles actually Portland cray craft beer hoodie. Cred DIY Cosby sweater church-key, flannel bicycle rights Carles wayfarers forage. Yr banh mi swag, Bushwick wolf food truck High Life Truffaut hella farm-to-table single-origin coffee. Wolf pickled Schlitz ethical before they sold out whatever, umami gluten-free shoreditch bicycle rights squid Carles.",
    likes: 12,
    likes_string: function() {
      if(this.likes === 1)
        return "Like";
      else
        return "Likes";
    },
    comments: [
      { from: "Channing Tatum", time: "Yesterday", content: "If I weren't Channing Tatum I'd hate it." }, 
      { from: "Tommy or Schallert or someone", time: "Jul. 11, 2:57", content: "Everyone go home." }
    ]
  },
  {
    from: "Salem Hilal",
    avatar: "img/salem-avatar.jpg",
    to: "Yammer Engineering",
    time: "Jul. 19th, 2:37pm",
    content: "Put a bird on it blog banjo kitsch, Godard you probably haven't heard of them Marfa hoodie aesthetic selvage wolf meggings sustainable. Keytar vinyl, next level thundercats authentic Carles actually Portland cray craft beer hoodie. Cred DIY Cosby sweater church-key, flannel bicycle rights Carles wayfarers forage. Yr banh mi swag, Bushwick wolf food truck High Life Truffaut hella farm-to-table single-origin coffee. Wolf pickled Schlitz ethical before they sold out whatever, umami gluten-free shoreditch bicycle rights squid Carles.",
    likes: 12,
    likes_string: function() {
      if(this.likes === 1)
        return "Like";
      else
        return "Likes";
    },
    comments: [
      { from: "Tommy or Schallert or someone", time: "Jul. 11, 2:57", content: "Everyone go home." }
    ]
  },
  {
    from: "Salem Hilal",
    avatar: "img/salem-avatar.jpg",
    to: "Yammer Engineering",
    time: "Jul. 19th, 2:37pm",
    content: "Put a bird on it blog banjo kitsch, Godard you probably haven't heard of them Marfa hoodie aesthetic selvage wolf meggings sustainable. Bespoke Wes Anderson plaid authentic, tote bag meh master cleanse Truffaut helvetica Odd Future pug ugh Pinterest church-key sriracha. PBR dreamcatcher gastropub, asymmetrical four loko umami Etsy raw denim biodiesel tumblr Cosby sweater roof party master cleanse. Etsy keytar vinyl, next level thundercats authentic Carles actually Portland cray craft beer hoodie.",
    likes: 12,
    likes_string: function() {
      if(this.likes === 1)
        return "Like";
      else
        return "Likes";
    },
    comments: [
      { from: "Channing Tatum", time: "Yesterday", content: "If I weren't Channing Tatum I'd hate it." }, 
      { from: "Mos Def", time: "Slightly later", content: "Mos def." }, 
      { from: "Skrillex", time: "Jul. 11, 2:39pm", content: "...what" }, 
      { from: "Tommy or Schallert or someone", time: "Jul. 11, 2:57", content: "Everyone go home." }
    ]
  }
]}