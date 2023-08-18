class Utils {

  formatarCpf(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  isUnderAge(data_nascimento){
    const year = parseInt(data_nascimento.split('/')[2], 10);
    
    // Obter o ano atual
    const currentYear = new Date().getFullYear();
    
    // Calcular a idade
    const age = currentYear - year;
    
    // Verificar se a idade é menor que 13
    return age < 13;
  }

  
}
module.exports = Utils