import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Lenguaje } from '../clases/Lenguaje';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() lenguajeSeleccionado: Lenguaje | null = null;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }
}
