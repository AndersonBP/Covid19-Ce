import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-diagnotic',
  templateUrl: './diagnotic-place.component.html',
  styleUrls: ['./diagnotic-place.component.css']
})
export class DiagnoticPlaceComponent implements OnInit {
  contacts = [
    {
      city: 'Fortaleza',
      title: 'Hospital São José',
      phone: '(85) 3101-2334',
      address: 'R. Nestor Barbosa, 315 - Parquelândia, Fortaleza - CE, 60455-610',
      coords: ['-3.7450593', '-38.5588703']
    },
    {
      city: 'Fortaleza',
      title: 'Hospital Infantil Albert Sabin',
      phone: '(85) 3101-4193',
      address: 'R. Tertuliano Sáles, 544 - Vila Uniao, Fortaleza - CE, 60410-794',
      coords: ['-3.7649216', '-38.5342946']
    },
    {
      city: 'Juazeiro do Norte',
      title: 'Hospital Maternidade Sao Lucas',
      phone: '(88) 3587-3352',
      address: 'R. São Benedito, 243 - São Miguel, Juazeiro do Norte - CE, 63020-080',
      coords: ['-7.2074272', '-39.3153977']
    },
    {
      city: 'Sobral',
      title: 'Hospital Regional Norte',
      phone: '(88) 3677-9300',
      address: 'Av. John Sanford, Bairro - Cidade Dr. Jose Euclides Ferreira Gomes Junior, Sobral - CE, 62031-305',
      coords: ['-3.6765479', '-40.3707591']
    },
    {
      city: 'Juazeiro do Norte',
      title: 'Hospital Regional Do Cariri',
      phone: '(88) 3566-3600',
      address: 'R. Catulo da Paixão Cearense, s/n - Triângulo, Juazeiro do Norte - CE, 63041-162',
      coords: ['-7.226314', '-39.3276486']
    },
    {
      city: 'Crato',
      title: 'Hospital e Maternidade São Francisco De Assis',
      phone: '(88) 3312-4000',
      address: 'Rua Coronel Antônio Luíz, 1028 - Pimenta, Crato - CE, 63105-000',
      coords: ['-7.2364825', '-39.4171914']
    },
    {
      city: 'Iguatu',
      title: 'Hospital Regional De Iguatu',
      phone: '(88) 3510-1250',
      address: 'R. Edilson Melo Távora, 172 - Esplanada I, Iguatu - CE, 63505-182',
      coords: ['-6.3718569', '-39.3104691']
    },
    {
      city: 'Russas',
      title: 'Hospital E Casa De Saude De Russas',
      phone: '(88) 3411-661',
      address: 'R. Dr. José Ramalho, 1436 - Centro, Russas - CE, 62900-000',
      coords: ['-4.9380689', '-37.9719187']
    },
    {
      city: 'Fortim',
      title: 'Hospital Municipal Do Fortim Dr Waldemar Alcantara',
      phone: '(88) 3413-1019',
      address: 'R. Isídio Moura, 64, Fortim - CE, 62815-000',
      coords: ['-3.8320102', '-38.482398']
    },
    {
      city: 'Aracati',
      title: 'Hospital: Hospital Municipal Dr Eduardo Dias',
      phone: '(88) 3446-2441',
      address: 'R. Dragão do Mar, 819 - Centro, Aracati - CE, 62800-000',
      coords: ['-4.562856', '-37.7658565']
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
