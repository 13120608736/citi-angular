import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-main-ant-design',
  standalone: true,
  imports: [
    NzIconModule,
    NzCardModule,
    NzDividerModule,
    NzGridModule,
    NzFlexModule,
    NzFormModule,
    NzSelectModule,
    NzDropDownModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzSwitchModule,
    NzCheckboxModule,
    NzSpinModule,
    NzToolTipModule,
    NzButtonModule,
  ],
  templateUrl: './main-ant-design.component.html',
  styleUrl: './main-ant-design.component.scss'
})
export class MainAntDesignComponent {

}
