function Home(){
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="BadBank Home Page"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
