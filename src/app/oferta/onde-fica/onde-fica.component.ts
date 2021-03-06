import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(
  	private route: ActivatedRoute,
  	private ofertasService: OfertasService
  ) { }

  ngOnInit() {
  	//console.log('ID da rota pai: ', this.route.parent.snapshot.params['id'])
    this.route.parent.params.subscribe((parametros: Params) => {
    	this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
    	.then((descricao: string) => {
    		this.ondeFica = descricao
    	})
    })
  }

}
